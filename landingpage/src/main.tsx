import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Gallery } from "./Gallery";
import { MindmapPage } from "./pages/MindmapPage";

const path = window.location.pathname;
const mindmapMatch = path.match(/^\/mindmap(?:\/(\d+))?$/);

let page: React.ReactNode;
if (mindmapMatch) {
  page = <MindmapPage chapterNumber={mindmapMatch[1] ? Number(mindmapMatch[1]) : 6} />;
} else if (window.location.search.includes("gallery")) {
  page = <Gallery />;
} else {
  page = <App />;
}

createRoot(document.getElementById("root")!).render(page);
