import cl from './navigation.module.scss'
import Link from "../link/Link";
import {useRouter} from "next/router";

export default function NavItem({Component, ActiveComponent, href}) {
    const router = new useRouter();
    return (
        <div className={cl.item}>
            <Link href={href}>
                { router.pathname === href ? <ActiveComponent /> : <Component /> }
            </Link>
        </div>
    )
}