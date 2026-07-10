import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider2 } from "./components/Context/CounterContext2.jsx";

createRoot(document.getElementById("root")).render(

    <CounterProvider2>
      <App />
    </CounterProvider2>
  
);
