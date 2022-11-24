import cl from './conference-view.module.scss';
import useSWR from "swr";
import {fetcher} from "./fetcher";
import Line from "../line/Line";

export default function ConferenceView({conference_id}) {
    const { data } = useSWR(process.env.NEXT_PUBLIC_APP_HOSTNAME + `/api/conferences/${conference_id}`, fetcher)

    if (!data) {
        return <></>
    }

    return (
        <div className={cl.container}>
            <p>{ data.author }</p>
            <Line />
            <h2>{ data.title }</h2>
            <span>{ data.datetime }</span>
            <div> { data.text } </div>
        </div>
    )
}