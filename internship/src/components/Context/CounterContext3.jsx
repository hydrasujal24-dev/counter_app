import { createContext, useState } from "react";

export const CounterContext3 = createContext();

export const CounterProvider3 = ({ children }) => {

  const [user, setUser] = useState({
    name: "",
    address: ""
  });


  const createUser = (name, address) => {
    setUser({
      name,
      address
    });
  };


  const clearUser = () => {
    setUser({
      name: "",
      address: ""
    });
  };


  return (
    <CounterContext3.Provider
      value={{
        user,
        createUser,
        clearUser
      }}
    >
      {children}
    </CounterContext3.Provider>
  );
};