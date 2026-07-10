import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const multiply = () => setCount((prev) => prev * 2);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset, multiply }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within CounterProvider");
  }

  return context;
};
