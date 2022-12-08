import cl from './button.module.scss'

export default function Button({children, onClick}) {
    return (
        <button className={cl.button} onClick={onClick}>{children}</button>
    )
}