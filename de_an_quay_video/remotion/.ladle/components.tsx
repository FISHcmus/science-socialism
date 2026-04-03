import type { GlobalProvider } from "@ladle/react";
import React from "react";
import { loadFont } from "@remotion/google-fonts/BeVietnamPro";
import "../src/index.css";

loadFont();

export const Provider: GlobalProvider = ({ children }) => (
  <div
    style={{
      backgroundColor: "#F7F3EE",
      padding: 40,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
    }}
  >
    {children}
  </div>
);
