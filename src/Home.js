// import logo from "./logo.svg";
import "./App.css";
import {
  BrandSection,
  Category,
  Filter,
  Follower,
  Footer,
  HeroSection,
  NFTslider,
  NavBar,
  NftCards,
  Service,
  VideoSlider,
} from "../src/components/componentindex";
import { NFTMarketplaceContext } from "./Context/NFTMarketplaceContext";
import { useContext } from "react";
import { useEffect } from "react";

function Home() {
  const { checkWalletConnection } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Service />
      <NFTslider />
      <Filter />
      <NftCards />
      <Category />
      <Follower />
      <VideoSlider />
      <BrandSection />
      <Footer />
    </div>
  );
}

export default Home;
