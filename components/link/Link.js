import cl from './link.module.scss';
import Router from "next/router";

export default function Link({children, href = "/"}) {
    const redirectTo = () => Router.push(href);

    return (
        <button className={cl.link} onClick={redirectTo}>
            {children}
        </button>
    )
}