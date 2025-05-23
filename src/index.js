import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Collection from "./Collection";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { NFTMarketplaceProvider } from "./Context/NFTMarketplaceContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NFTMarketplaceProvider>
        <App />
      </NFTMarketplaceProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter from react-router-dom

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {" "}
//       {/* Wrap your App component with BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();
