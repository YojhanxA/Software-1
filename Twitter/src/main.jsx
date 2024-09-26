import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClonTwitter } from "./ClonTwitter";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClonTwitter />
    </BrowserRouter>
  </StrictMode>
);
