import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// scroll bar
import "simplebar/src/simplebar.css";

// third-party
import { Provider as ReduxProvider } from "react-redux";

// apex-chart
import "assets/third-party/apex-chart.css";

import App from "./App";
import { store } from "store";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

reportWebVitals();
