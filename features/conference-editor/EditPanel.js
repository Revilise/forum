import cl from './conference-editor.module.scss';
import {Save, Image, Trash} from "../../components/icon/icons";
import Line from "../../components/line/Line";
import {useDispatch} from "react-redux";
import {clearAll} from "./ConferenceEditorSlice";

const Button = ({
   children = <></>, onClick
}) => (
    <button onClick={onClick} className={cl.edit_panel__button}>{children}</button>
)

export default function EditPanel() {
    const dispatch = useDispatch();

    const items = [
        {
            Component: Save,
            handler: (e) => {
                e.preventDefault();
                dispatch(clearAll());
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
                {items?.length ? items.map(el => el.isLine ? <Line /> : <Button onClick={el.handler}>{el.Component()}</Button>) : <></> }
            </div>
        </div>
    )
}