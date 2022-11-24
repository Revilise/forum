import cl from './message-input.module.scss';
import { Send } from '../icon/icons';

function MessageInput({value, onChange, children, placeholder}) {
    return (
        <form className={cl.container} onSubmit={e => e.preventDefault()}>
            <input placeholder={placeholder} className={cl.input} value={value} onChange={onChange} />
            {children}
        </form>
    )
}

MessageInput.Submit = ({onSubmit}) => (
    <button className={cl.button} onClick={onSubmit}>
        <Send />
    </button>
)

export default MessageInput;
