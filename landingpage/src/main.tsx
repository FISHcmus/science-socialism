import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Gallery } from "./Gallery";

const isGallery = window.location.search.includes("gallery");
createRoot(document.getElementById("root")!).render(isGallery ? <Gallery /> : <App />);
