import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchBar from "./components/SearchBar";
import ImageShow from "./components/ImageShow";
import ImageList from "./components/ImageList";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
