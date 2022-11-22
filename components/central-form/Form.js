import cl from './central-form.module.scss'
import Logo from "../logo/Logo";
import Line from '../line/Line';

function Form({children, title}) {
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

Form.Button = ({children, onClick}) => (
    <button onClick={onClick} className={cl.button}>
        {children}
    </button>
)

export default Form;