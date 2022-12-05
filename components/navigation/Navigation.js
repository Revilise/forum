import cl from './navigation.module.scss'
import Icons from "../icon/icons";
import axios from "axios";
import React from 'react';
import useUser from "../../lib/hooks/useUser";
import Avatar from "../avatar/Avatar";
import Router from "next/router";

const Navigation = ({children}) => {
    const { user, mutateUser } = useUser({ redirectTo: "/login" });

    async function logout() {
        mutateUser(
            await (async function() {
                await axios.get('/api/auth/logout')
                return { isLogged: false, filepath: user.filepath }
            })()
        )
    }

    return (
        <nav className={cl.container}>
            <Avatar filepath={user?.filepath} />
            {children}
            <div style={{padding: "12px"}} onClick={logout}>
                <Icons.LogOut/>
            </div>
        </nav>
    )
}

function propsAreEqual(prev, next) {
    return prev.children[0].key === next.children[0].key
}

export default React.memo(Navigation, propsAreEqual)