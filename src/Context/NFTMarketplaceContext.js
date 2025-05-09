import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

// IPFS Auth Setup
const projectId = "2Un5RBUi39M7eUmH2FpywnwGKYc";
const projectSecretKey = "646b7bd18823404d1d55fb18b38cdaf7";
const auth = `Basic ${btoa(`${projectId}:${projectSecretKey}`)}`;
const subdomain = "https://fyp-nft-marketplace.infura-ipfs.io";

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signerOrProvider);

// CONNECTING TO SMART CONTRACT
const connectingSmartContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new BrowserProvider(connection);
    const signer = await provider.getSigner();
    return fetchContract(signer);
  } catch (error) {
    console.error("Error connecting to smart contract:", error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = ",Collect,and Sell NFTs";
  const [currentAccount, setCurrentAccount] = useState("");

  // CHECK IF WALLET IS CONNECTED
  const checkWalletConnection = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  useEffect(() => {
    console.log(currentAccount);
  }, [currentAccount]);

  // CONNECT WALLET
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // UPLOAD FILE TO IPFS
  const uploadToIpfs = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.error("Error uploading to IPFS:", error);
    }
  };

  // CREATE NFT
  const createNft = async (name, price, description, image) => {
    if (!name || !description || !price || !image) {
      return console.error("Missing required data for NFT creation.");
    }

    const data = JSON.stringify({ name, description, image });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      await createSell(url, price);
    } catch (error) {
      console.error("Error while Creating NFT:", error);
    }
  };

  // CREATE SALE
  const createSell = async (url, price) => {
    try {
      const parsedPrice = parseUnits(price, "ether");
      const contract = await connectingSmartContract();
      const listingPrice = await contract.getListingPrice();
      const transaction = await contract.createToken(url, parsedPrice, {
        value: listingPrice.toString(),
      });
      await transaction.wait();
      console.log("Sale created successfully!");
    } catch (error) {
      console.error("Error while creating sale:", error);
    }
  };

  // FETCH ALL NFTS
  const fetchNfts = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unFormattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = formatUnits(unFormattedPrice.toString(), "ether");

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  // FETCH USER NFTs
  const fetchMyNfts = async (type) => {
    try {
      const contract = await connectingSmartContract();
      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unFormattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = formatUnits(unFormattedPrice.toString(), "ether");

            return {
              price,
              tokenId: Number(tokenId),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.error("Error fetching listed NFTs:", error);
    }
  };

  // BUY NFT
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingSmartContract();
      const price = parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
    } catch (error) {
      console.error("Error buying NFT:", error);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        titleData,
        connectWallet,
        uploadToIpfs,
        createNft,
        fetchNfts,
        fetchMyNfts,
        buyNFT,
        checkWalletConnection,
        currentAccount,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
