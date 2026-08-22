import React, { useState } from "react";
import "./index.css";
import Sidebar from "./Sidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      <Sidebar isOpen={isOpen} />

      <div className="main-content">
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        <h1>React Toggle Sidebar Mini Project</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
}
