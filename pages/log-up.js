import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {LogIn} from "../components/icon/icons";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {showPopup} from "../features/popup/PopupSlice";
import axios from "axios";
import Router from "next/router";
import useUser from "../lib/hooks/useUser";

export default function LogUpPage() {
    const [inputs, changeInput] = useState({
        login: "",
        name: "",
        email: "",
        password: "",
        rep_password: "",
        nickname: ""
    });

    const dispatch = useDispatch();
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    })

    function onChange(e) {
        inputs[e.target.name] = e.target.value;
        changeInput(Object.assign({}, inputs));
    }

    async function submit() {
        const values = Object.values(inputs);

        if (values.every(el => el.length)) {

            if (inputs.password !== inputs.rep_password) {
                dispatch(showPopup({
                    header: "Password Error",
                    text: "Password and repeat password are not same."
                }))
                return;
            }
            const { login, password, name, nickname, email } = inputs;

            mutateUser(
                await (async function () {
                    const res = await axios.post(
                        '/api/auth/logup',
                        { login, password, name, nickname, email }
                    )

                    if (res.isLogged) return res;
                })()
             )
        }
    }

    return (
        <Layout title={"log up"}>
            <Form>
                <Input required={true} onChange={onChange} value={inputs.login} name={"login"} placeholder={"LOGIN"} />
                <Input required={true} onChange={onChange} value={inputs.email} name={"email"} placeholder={"EMAIL"} />
                <Input required={true} onChange={onChange} value={inputs.name} name={"name"} placeholder={"NAME"} />
                <Input required={true} onChange={onChange} value={inputs.nickname} name={"nickname"} placeholder={"NICKNAME"} />
                <Input required={true} onChange={onChange} value={inputs.password} name={"password"} placeholder={"PASSWORD"} />
                <Input required={true} onChange={onChange} value={inputs.rep_password} name={"rep_password"} placeholder={"REPEAT PASSWORD"} />
                <Form.Button onClick={submit}>
                    Log up
                    <LogIn />
                </Form.Button>
                <Form.Textblock>
                    already have account?
                    <Form.Link href={"/login"}>Log in</Form.Link>
                </Form.Textblock>
            </Form>
        </Layout>
    )
}