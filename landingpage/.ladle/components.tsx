import React from "react";
import "../src/index.css";

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: "#FAFAF7", minHeight: "100vh" }}>
    {children}
  </div>
);
