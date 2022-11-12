import cl from './sidebar.module.scss';
import {roleTypes} from "../../lib/roles/roleTypes";

const Sidebar = ({children}) => (
    <div className={cl.sidebar}>
        {children}
    </div>
)

export default function SidebarFactory({type}) {
    switch (type) {
        case roleTypes.admin:
            return <AdminSidebar />
        case roleTypes.moder:
            return <ModerSidebar />
        case roleTypes.user:
            return <UserSidebar />
        default: throw new Error("unexpected role type: " + type);
    }
}

export const UserSidebar = () => (
    <Sidebar>
        user
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