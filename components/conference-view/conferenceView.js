import cl from './conference-view.module.scss';
import Line from "../line/Line";

export default function ConferenceView({data, children}) {
    return (
        <div className={cl.container}>
            <header className={cl.header}>
                { data.author }
                { children }
            </header>
            <Line />
            <h2>{ data.title }</h2>
            <span>{ data.datetime }</span>
            <div> { data.text } </div>
        </div>
    )
}