import React from "react";
import ReactDOM from "react-dom/client";
import ResetCSS from "./components/ResetCSS";
import App from "./App";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
Sentry.init({
  dsn: "https://d865477545734d2a8aaae794addd695e@o4504687903768576.ingest.sentry.io/4504687908749312",
  integrations: [new BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>
);
