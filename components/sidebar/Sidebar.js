import cl from './sidebar.module.scss';
import {roleTypes} from "../../lib/roles/roleTypes";
import {Home, LogOut, PlusCircle, Settings, User} from "../icon/icons";
import NavItem from "../navigation/NavItem";
import Line from "../line/Line";
import Navigation from "../navigation/Navigation";
import useUser from "../../lib/hooks/useUser";
import {useEffect} from "react";
import Avatar from "../avatar/Avatar";

const Sidebar = ({children}) => (
    <div className={cl.sidebar}>
        {children}
    </div>
)

export default function SidebarFactory({user}) {
    const { role } = user;

    switch (role) {
        case roleTypes.admin:
            return <AdminSidebar />
        case roleTypes.moder:
            return <ModerSidebar />
        case roleTypes.user:
            return <UserSidebar user={user} />
        default: throw new Error("unexpected role type: " + type);
    }
}

export const UserSidebar = () => (
    <Sidebar>
        <Navigation>
            <NavItem href={"/"} Component={Home} ActiveComponent={Home.Active}/>
            <NavItem href={`/profile`} Component={User} ActiveComponent={User.Active}/>
            <NavItem href={"/create"} Component={PlusCircle} ActiveComponent={PlusCircle.Active}/>
            <Line/>
            {/*<NavItem href={"/settings"} Component={Settings} ActiveComponent={Settings.Active}/>*/}
        </Navigation>
    </Sidebar>
)
export const AdminSidebar = () => (
    <Sidebar>
        admin
    </Sidebar>
)
export const ModerSidebar = () => (
    <Sidebar>
        moder
    </Sidebar>
)