import { Nav, Logo, HeaderWrapper } from "./styled";
import { Navigation } from "./navigate/navigate";
import { useStore } from "../../store";

export const Header = () => {
    const { state, dispatch } = useStore();
    const category = [
        {
            path: "/contents",
            name: "Contents",
        },
        {
            path: "/board",
            name: "Board",
        },
        {
            path: "/signup",
            name: "signup",
            islogin: false,
        },
        {
            path: "/login",
            name: "Login",
            islogin: false,
        },
        {
            path: "/logout",
            name: "Logout",
            islogin: true,
        },
        {
            path: "/profile",
            name: "Profile",
            islogin: true,
        },
    ];

    return (
        <HeaderWrapper>
            <Logo>HI HI</Logo>
            <Nav>
                <Navigation state={state} category={category} />
            </Nav>
        </HeaderWrapper>
    );
};

