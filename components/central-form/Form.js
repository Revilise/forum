import cl from './central-form.module.scss'
import Logo from "../logo/Logo";
import Line from '../line/Line';

export default function Form({children, title}) {
    return (
        <div className={cl.form}>
            <header className={cl.form_header}>
                <Logo level={2} />
            </header>
            <Line />
            <h3>{title}</h3>
            {children}
        </div>
    )
}