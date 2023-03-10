import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Contents, Login, Logout, Board, Profile } from "./pages";
import { Header } from "./layouts/header";
import { Provider } from "./store";

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contents" element={<Contents />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/board" element={<Board />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

