import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Logout = () => {
    const { dispatch } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    });
    return <></>;
};

