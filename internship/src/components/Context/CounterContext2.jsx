import { createContext, useContext, useState } from "react";

export const CounterContext2 = createContext(null);

export const CounterProvider2 = ({ children }) => {
  const [text, setText] = useState("");

  const add = () => setText("Hello");
  const remove = () => setText("");

  return (
    <CounterContext2.Provider
      value={{ text, add, remove }}
    >
      {children}
    </CounterContext2.Provider>
  );
};

export const useCounter2 = () => {
  const context = useContext(CounterContext2);

  if (!context) {
    throw new Error("useCounter2 must be used within CounterProvider2");
  }

  return context;
};
