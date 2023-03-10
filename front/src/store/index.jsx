import { createContext, useContext, useReducer } from "react";

export const Context = createContext();
export const useStore = () => useContext(Context);

export const Provider = ({ children }) => {
    const initialState = {
        islogin: false,
        user: {},
    };
    return <Context.Provider value={initialState}>{children}</Context.Provider>;
};

