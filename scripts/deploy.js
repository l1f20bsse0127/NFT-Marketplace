const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace"); // Replace with your contract name
  const myContract = await NFTMarketplace.deploy();

  await myContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
