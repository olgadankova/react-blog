import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const index = () => {
  return <div>index</div>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
