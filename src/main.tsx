import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const rootElement = document.getElementById("root")!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="architecture-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}