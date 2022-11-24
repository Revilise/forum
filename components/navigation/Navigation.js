import cl from './navigation.module.scss'
import Icons from "../icon/icons";
import axios from "axios";
import React from 'react';
import useUser from "../../lib/auth/useUser";

const Navigation = ({children}) => {
    const { mutateUser } = useUser({ redirectTo: "/login" });

    async function logout() {
        mutateUser(
            await (async function() {
                return await axios
                        .get('http://localhost:3000/api/auth/logout')
                        .then(() => ({ isLogged: false }))
            })()
        )
    }

    return (
        <nav className={cl.container}>
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