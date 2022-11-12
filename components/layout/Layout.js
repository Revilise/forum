import Header from "../header/Header";
import Footer from "../footer/Fotoer";

import cl from './layout.module.scss';
import Head from "next/head";

export default function Layout({children, title}) {
    return (
        <div className={cl.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <div className={cl.layer_content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}