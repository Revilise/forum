import Layout from "../components/layout/Layout";
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";
import {useState} from "react";
import useUser from "../lib/hooks/useUser";
import axios from "axios";
import {LogIn} from "../components/icon/icons";
import {useDispatch} from "react-redux";
import {togglePopupVisiblity} from "../features/popup/PopupSlice";

export default function LoginPage() {

    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    const dispatch = useDispatch();

    async function onsubmit() {
        mutateUser(
            await (async function() {
                const res = await axios
                    .post(
                        'http://localhost:3000/api/auth/login',
                        { password: inputs.password, login: inputs.login }
                    )
                    .then(res => res.data)

                if (res.isLogged) return res;

                // if isLogged === false show auth error
                dispatch(togglePopupVisiblity(true))
            })()
        )
    }

    const [inputs, changeInput] = useState({
        login: "",
        password: ""
    })

    function onChange(e) {
        inputs[e.target.name] = e.target.value;
        changeInput(Object.assign({}, inputs));
    }

    return (
        <Layout title={"login"}>
            <Form title={"LOG IN"}>
                <Input required={true} name={"login"} value={inputs.login} onChange={onChange} placeholder={"LOGIN"} />
                <Input required={true} name={"password"} value={inputs.password} onChange={onChange} placeholder={"PASSWORD"} />
                <Form.Button onClick={onsubmit}>
                    login
                    <LogIn />
                </Form.Button>
                <Form.Textblock>
                    have no account yet?
                    <Form.Link href={"/log-up"}>Log up</Form.Link>
                </Form.Textblock>
            </Form>
        </Layout>
    )
}