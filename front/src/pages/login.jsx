import { useStore } from "../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button } from "../Components/index";

export const Login = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userid = e.target.userid.value;
        const userpw = e.target.userpw.value;
        const body = {
            userid,
            userpw,
        };
        const respone = await axios.post("http://localhost:3000/login", body);
        const token = respone.data;
        dispatch({ type: "LOGIN", payload: { islogin: true, user: token } });
        navigate("/");
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                아이디
                <Input type="text" name="userid" id="userid" />
                패스워드
                <Input type="password" name="userpw" id="userpw" />
                <Button type="submit">로그인</Button>
            </Form>
        </>
    );
};

