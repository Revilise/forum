import cl from './layout.module.scss';
import Head from "next/head";
import SidebarFactory from "../sidebar/Sidebar";
import {roleTypes} from "../../lib/roles/roleTypes";

export default function Layout({children, title, sidebar}) {
    return (
        <div className={cl.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            {
                sidebar ? <SidebarFactory type={roleTypes.user} /> : <></>
            }
            { children }
        </div>
    )
}

Layout.Content = ({children}) => (
    <div className={cl.layout_content}>
        {children}
    </div>
)
Layout.HorizontalPanel = ({children}) => (
    <div className={cl.layout__horiz_panel}>
        {children}
    </div>
)