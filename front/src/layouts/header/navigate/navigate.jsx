import { memo } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = memo(({ state, category }) => {
    const elements = category
        .filter((v) => !v.hasOwnProperty("islogin") || v.islogin === state.islogin)
        .map((v) => (
            <li key={v.path}>
                <NavLink to={v.path}>{v.name}</NavLink>
            </li>
        ));

    return <ul>{elements}</ul>;
});

