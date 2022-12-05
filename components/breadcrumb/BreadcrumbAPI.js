import Breadcrumb from "./Breadcrumb";

export default function BreadcrumbAPI() {
    const links = [
        { href: "/", text: "all" },
        { href: "/my-conferences", text: "my conferences"},
        { href: "/part-in", text: "part in conferences"}
    ]
    return <Breadcrumb items={links} />
}