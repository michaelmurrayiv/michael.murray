"use client";

import React, { useState } from "react";

type HistoryEntry = {
  type: "user" | "bot";
  text: string;
};

const TerminalChatBot = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]); // Explicitly type the state
  const [input, setInput] = useState("");

  const handleCommand = () => {
  const newHistory: HistoryEntry[] = [...history, { type: "user", text: input }];

    let response = "Command not recognized.";
    if (input.toLowerCase() === "help") {
      response = "Available commands: help, hello, clear";
    } else if (input.toLowerCase() === "hello") {
      response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    newHistory.push({ type: "bot", text: response });
    setHistory(newHistory);
    setInput("");
  };

  return (
    <div
      style={{
        fontFamily: "monospace",
        backgroundColor: "#000",
        color: "#0f0",
        padding: "20px",
        borderRadius: "8px",
        height: "400px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}>
        {history.map((entry, index) => (
          <div
            key={index}
            style={{
              color: entry.type === "user" ? "#fff" : "#0f0",
            }}
          >
            {entry.type === "user" ? `> ${entry.text}` : entry.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommand()}
          placeholder="Enter command..."
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#000",
            color: "#0f0",
            border: "1px solid #0f0",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default TerminalChatBot;
