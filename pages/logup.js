import Layout from "../components/layout/Layout";
import Logo from '../components/logo/Logo'
import Form from "../components/central-form/Form";
import Input from "../components/input/Input";

export default function LogupPage() {
    return (
        <Layout title={"login"}>
            <Form title={"LOG IN"}>
                <Input placeholder={"LOGIN"} />
                <Input placeholder={"NAME"} />
                <Input placeholder={"EMAIL"} />
                <Input placeholder={"PASSWORD"} />
                <Input placeholder={"REPEAT PASSWORD"} />
            </Form>
        </Layout>
    )
}