import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider3 } from "./components/Context/CounterContext3.jsx";
createRoot(document.getElementById("root")).render(

    <CounterProvider3>
      <App />
    </CounterProvider3>
  
);
