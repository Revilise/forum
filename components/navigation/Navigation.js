import cl from './navigation.module.scss'
import Icons from "../icon/icons";
import useUser from "../../lib/auth/useUser";
import axios from "axios";


const Navigation = ({children}) => {

    const { mutateUser } = useUser({
        redirectTo: "/login"
    });

    async function logout(e) {
        mutateUser(
            await (async function() {
                return await axios
                        .get('http://localhost:3000/api/logout')
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

export default Navigation;