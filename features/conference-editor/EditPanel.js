import cl from './conference-editor.module.scss';
import {Save, Image, Trash} from "../../components/icon/icons";
import Line from "../../components/line/Line";
import {useDispatch, useSelector} from "react-redux";
import {clearAll, selectConference} from "./ConferenceEditorSlice";
import axios from "axios";
import {showPopup} from "../popup/PopupSlice";

const Button = ({
   children = <></>, onClick
}) => (
    <button onClick={onClick} className={cl.edit_panel__button}>{children}</button>
)

export default function EditPanel() {
    const dispatch = useDispatch();
    const { title, text } = useSelector(selectConference);

    const items = [
        {
            Component: Save,
            handler: (e) => {
                e.preventDefault();
                if (title.length && text.length) {
                    axios
                        .post(
                            process.env.NEXT_PUBLIC_APP_HOSTNAME + "/api/conferences/post",

                            { title, text }
                        )
                        .then(() => {
                            dispatch(clearAll())
                            dispatch(showPopup({
                                header: "SUCCESS",
                                text: "Conference created."
                            }))
                        })
                        .catch((err) => console.error(err))
                    return;
                }
                dispatch(showPopup({
                    header: "ERROR",
                    text: "Can not create conference with empty title or empty content."
                }))
            }
        },
        {
            isLine: true
        },
        {
            Component: () => <b>B</b>,
            handler: () => {}
        },
        {
            Component: () => <i>i</i>,
            handler: () => {}
        },
        {
            Component: () => <u>U</u>,
            handler: () => {}
        },
        {
            Component: Image,
            handler: () => {}
        },
        {
            isLine: true
        },
        {
            Component: Trash,
            handler: (e) => {
                e.preventDefault();
                dispatch(clearAll());
            }
        }
    ]

    return (
        <div className={cl.fixed_wrapper}>
            <div className={cl.edit_panel}>
                {items?.length ? items.map((el, i) => el.isLine ? <Line key={i} /> : <Button key={i} onClick={el.handler}>{el.Component()}</Button>) : <></> }
            </div>
        </div>
    )
}