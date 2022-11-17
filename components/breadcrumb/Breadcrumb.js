import cl from './breadcrumb.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {Fragment} from "react";

const Item = ({href, children, isActive}) => (
    <div className={isActive ? cl["link__active"] : cl.link}>
        <Link href={href}>{children}</Link>
    </div>
)

export default function Breadcrumb({items}) {
    const router = useRouter();

    return (
        <div className={cl.container}>
            {
                items?.length
                    ? items
                        .map((el, idx, arr) => (
                            <Fragment key={idx}>
                                <Item href={el.href} isActive={el.href === router.pathname} children={el.text} />
                                { idx + 1 < arr.length ? <>/</> : <></>}
                            </Fragment>
                        ))
                    : <></>
            }
        </div>
    )
}