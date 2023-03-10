import { useEffect, useState } from "react";

export const useLoginState = (key, initialState) => {
    // const local = localStorage.getItem(key);
    // console.log(local);
    // const state = !local ? initialState : JSON.parse(local);
    // console.log(state);
    const [state, setState] = useState(() => {
        const storagedState = localStorage.getItem(key);
        return !storagedState ? initialState : JSON.parse(storagedState);
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
};

