import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {useState} from "react";
import axios from 'axios';
import Router from "next/router";

export default function LoginPage() {

    function onsubmit() {
        axios
            .post("http://localhost:3000/api/login", {login, password})
            .then(res => {
                console.log(res.data)
                if (res.data.ok) Router.push('/');
            })
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