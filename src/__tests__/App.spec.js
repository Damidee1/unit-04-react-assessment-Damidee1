import React from "react";
import createRoot from "react-dom/client";
import "@testing-library/jest-dom";
import App from "../../src/App";

it("renders <App/> without crashing", () => {
  const div = document.createElement("div");
  createRoot(<App />, div);
});
