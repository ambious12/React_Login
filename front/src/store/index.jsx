import { createContext, useContext, useReducer } from "react";
import { rootReducer } from "./reducer";
import { useLoginState } from "../hooks/useLoginState";

export const Context = createContext();
export const useStore = () => useContext(Context);

export const Provider = ({ children }) => {
    const initialState = {
        islogin: false,
        user: {},
    };

    const [state, dispatch] = useReducer(rootReducer, initialState);
    const [LoginState, setLoginState] = useLoginState("state", initialState);

    const global = {
        state: LoginState,
        dispatch: (action) => {
            setLoginState(rootReducer(LoginState, action));
        },
    };

    return <Context.Provider value={global}>{children}</Context.Provider>;
};

