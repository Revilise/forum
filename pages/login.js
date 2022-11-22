import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {useState} from "react";
import useUser from "../lib/auth/useUser";
import axios from "axios";
import {LogIn} from "../components/icon/icons";

export default function LoginPage() {

    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    async function onsubmit() {
        mutateUser(
            await (async function() {
                const res = await axios
                    .post(
                        'http://localhost:3000/api/login',
                        { password, login }
                    )
                    .then(res => res.data)

                if (res.isLogged) return res;
            })()
        )
    }

    const [login, changeLogin] = useState("userlog");
    const [password, changePassword] = useState("123");

    return (
        <Layout title={"login"}>
            <Form title={"LOG IN"}>
                <Input value={login} onChange={changeLogin} placeholder={"LOGIN"} />
                <Input value={password} onChange={changePassword} placeholder={"PASSWORD"} />
                <Form.Button onClick={onsubmit}>
                    login
                    <LogIn />
                </Form.Button>
            </Form>
        </Layout>
    )
}