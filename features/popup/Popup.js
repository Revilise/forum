import cl from './popup.module.scss';
import Icons from "../../components/icon/icons";
import {useDispatch, useSelector} from "react-redux";
import {closePopup, selectContent} from "./PopupSlice";
import {useEffect} from "react";

export default function Popup() {
    const dispatch = useDispatch();
    const {text, header} = useSelector(selectContent);

    useEffect(() => {
        function KeyDown(e) {
            if (e.key === "Escape") close();
        }

        window.addEventListener('keydown', KeyDown);

        return () => window.removeEventListener('keydown', KeyDown);
    }, [])

    function close() {
        dispatch(closePopup())
    }

    return (
        <div className={cl.before}>
            <div className={cl.container}>
                <header className={cl.header}>
                    <h3>{header}</h3>
                    <div onClick={close}>
                        <Icons.Close />
                    </div>
                </header>
                <p>{text}</p>
            </div>
        </div>
    )
}