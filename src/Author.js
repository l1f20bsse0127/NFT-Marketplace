import React from "react";
import { BrandSection, Footer, NavBar } from "./components/componentindex";
import { AuthorBanner, AuthorMenu } from "./autherPage/authorIndex";

const Author = () => {
  return (
    <div>
      <NavBar />
      <AuthorBanner />
      <AuthorMenu />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default Author;
