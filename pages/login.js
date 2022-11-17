import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {useState} from "react";
import axios from 'axios';
import Router from "next/router";
import useUser from "../lib/auth/useUser";

export default function LoginPage() {

    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    async function onsubmit() {
        mutateUser(
            await (async function() {
                const res = await fetch('http://localhost:3000/api/login', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({password, login})
                })

                const data = await res.json();

                if (res.ok) {
                    return data;
                }
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
                <button onClick={onsubmit}>login</button>
            </Form>
        </Layout>
    )
}