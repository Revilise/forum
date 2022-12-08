import cl from './layout.module.scss';
import Head from "next/head";
import SidebarFactory from "../sidebar/Sidebar";
import Popup from "../../features/popup/Popup";
import {useSelector} from "react-redux";
import {selectIsPopupVisible} from "../../features/popup/PopupSlice";

export default function Layout({children, title, user}) {

    const isPopupVisible = useSelector(selectIsPopupVisible);
    return (
        <Grid equalColumns={!user}>
            <Head>
                <title>{title}</title>
            </Head>
            {
                isPopupVisible ? <Popup /> : <></>
            }
            {
                user ? <SidebarFactory user={user} /> : <></>
            }
            { children }
        </Grid>
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

function Grid({equalColumns, children}) {
    return equalColumns ?
        <div className={cl.layout__equal}>
            {children}
        </div>
        :
        <div className={cl.layout}>
            {children}
        </div>
}