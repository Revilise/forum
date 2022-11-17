import cl from './input.module.scss';

export default function Input({
    placeholder,
    value,
    onChange,
    required
}) {
    return <input className={cl.input} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required={required}/>
}