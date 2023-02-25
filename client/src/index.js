import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// importingTransactionContextProvider
import {TransactionsProvider} from "./context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);
