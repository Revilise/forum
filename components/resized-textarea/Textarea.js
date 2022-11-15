import cl from './textarea.module.scss';
import {createRef} from "react";

export default function Textarea({
    value = "",
    placeholder = "",
    required = false,
    onChange = function() {},
    className = null
}) {
    const ref = createRef();

    function resize() {
        ref.current.style.height = "auto";
        ref.current.style.height = ref.current.scrollHeight + "px";
    }

    function OnChangeHandle(e) {
        e.preventDefault();
        onChange(e.target.value);
        resize();
    }
    return (
        <textarea
            rows={1}
            placeholder={placeholder}
            required={required}
            value={value}
            className={className ? className : cl.textarea}
            ref={ref}
            onChange={OnChangeHandle}
        />
    )
}