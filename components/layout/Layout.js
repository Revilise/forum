import cl from './layout.module.scss';
import Head from "next/head";
import SidebarFactory from "../sidebar/Sidebar";
import Popup from "../../features/popup/Popup";
import {useSelector} from "react-redux";
import {selectIsVisible} from "../../features/popup/PopupSlice";

export default function Layout({children, title, user, isSidebar}) {

    const isPopupVisible = useSelector(selectIsVisible);
    return (
        <div className={cl.layout}>
            <Head>
                <title>{title}</title>
            </Head>
            {
                isPopupVisible ? <Popup /> : <></>
            }
            {
                isSidebar ? <SidebarFactory user={user} /> : <></>
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