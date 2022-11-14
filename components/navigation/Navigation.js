import cl from './navigation.module.scss'

const Navigation = ({children}) => (
    <nav className={cl.container}>
        {children}
    </nav>
)

export default Navigation;