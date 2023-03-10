import { Nav, Logo, HeaderWrapper } from "./styled";
import { Navigation } from "./navigate/navigate";

export const Header = () => {
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
            isLogin: false,
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
    const state = {
        islogin: false,
        user: {},
    };
    return (
        <HeaderWrapper>
            <Logo>HI HI</Logo>
            <Nav>
                <Navigation state={state} category={category} />
            </Nav>
        </HeaderWrapper>
    );
};

