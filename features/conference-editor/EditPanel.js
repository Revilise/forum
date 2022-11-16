import cl from './conference-editor.module.scss';
import {Save, Image, Trash} from "../../components/icon/icons";
import Line from "../../components/line/Line";

const Button = ({
   children = <></>, onClick
}) => (
    <button onClick={onClick} className={cl.edit_panel__button}>{children}</button>
)

export default function EditPanel() {
    const items = [
        {
            Component: Save,
            handler: () => {}
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
            handler: () => {}
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