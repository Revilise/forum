import cl from './input.module.scss';

export default function Input({
    placeholder,
    value,
    onChange,
    required,
    name
}) {
    return <input name={name} className={cl.input} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
}