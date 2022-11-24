import cl from './central-form.module.scss'
import Logo from "../logo/Logo";
import Line from '../line/Line';
import Link from "next/link";

function Form({children, title}) {
    return (
        <form onSubmit={e => e.preventDefault()} className={cl.form}>
            <header className={cl.form_header}>
                <Logo level={2} />
            </header>
            <Line />
            <h3>{title}</h3>
            {children}
        </form>
    )
}

Form.Button = ({children, onClick}) => (
    <button onClick={onClick} className={cl.button}>
        {children}
    </button>
)

Form.Link = ({children, href}) => (
    <div className={cl.link}>
        <Link href={href}>
           {children}
        </Link>
    </div>
)
Form.Textblock = ({children}) => (
    <div className={cl.textblock}>
        {children}
    </div>
)

export default Form;