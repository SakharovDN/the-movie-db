import { createRoot } from "react-dom/client";

import { App } from "./app";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
