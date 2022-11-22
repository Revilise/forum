import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {LogIn} from "../components/icon/icons";
import {useEffect, useState} from "react";

export default function LogUpPage() {
    const [inputs, changeInput] = useState({
        login: "",
        name: "",
        email: "",
        password: "",
        rep_password: ""
    });

    function onChange(e) {
        inputs[e.target.name] = e.target.value;
        changeInput(Object.assign({}, inputs));
    }

    return (
        <Layout title={"log up"}>
            <Form>
                <Input onChange={onChange} value={inputs.login} name={"login"} placeholder={"LOGIN"} />
                <Input onChange={onChange} value={inputs.name} name={"name"} placeholder={"NAME"} />
                <Input onChange={onChange} value={inputs.email} name={"email"} placeholder={"EMAIL"} />
                <Input onChange={onChange} value={inputs.password} name={"password"} placeholder={"PASSWORD"} />
                <Input onChange={onChange} value={inputs.rep_password} name={"rep_password"} placeholder={"REPEAT PASSWORD"} />
                <Form.Button>
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