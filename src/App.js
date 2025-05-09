import logo from "./logo.svg";
import "./App.css";

import { Routes, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Collection from "./Collection";
import Search from "./Search";
import Author from "./Author";
import About from "./About";
import Details from "./Details";
import Contact from "./Contact";
import Accounts from "./Accounts";
import Connect from "./Connect";
import Creation from "./Creation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auther-profile" element={<Author />} />
        <Route path="/about" element={<About />} />
        <Route path="/nft-details" element={<Details />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/account-setting" element={<Accounts />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/create" element={<Creation />} />
      </Routes>
    </div>
  );
}

export default App;
