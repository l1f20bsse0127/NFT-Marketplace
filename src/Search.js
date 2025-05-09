import React from "react";
import {
  BrandSection,
  Filter,
  Footer,
  NavBar,
} from "./components/componentindex";
import { Searching } from "./searchPage/searchIndex";
import { NftCard2 } from "./collectionPage/collectionIndex";
const Search = () => {
  return (
    <div>
      <NavBar />
      <Searching />
      <NftCard2 />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default Search;
