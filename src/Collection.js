import React from "react";
import { Banner, NftCard2 } from "./collectionPage/collectionIndex";
import {
  BrandSection,
  Filter,
  Footer,
  NavBar,
} from "./components/componentindex";

// import Filter from "./components/Filter/Filter.jsx";
const Collection = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Filter />
      <NftCard2 />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default Collection;
