import cl from './conference-view.module.scss';
import useSWR from "swr";
import Line from "../line/Line";
import useUser from "../../lib/auth/useUser";
import axios from "axios";
import Router from "next/router";
import { Trash } from '../icon/icons';

export default function ConferenceView({conference_id}) {
    const { data } = useSWR(`/api/conferences/${conference_id}`)
    const { user } = useUser({redirectTo: '/login'});

    function deleteConference() {
        axios.delete(
            '/api/conferences/delete',
            {data: {conference_id}}
        ).then(() => Router.push('/'))
    }

    if (!data) {
        return <></>
    }

    return (
        <div className={cl.container}>
            <header className={cl.header}>
                { data.author }
                { user?.id === data?.author_id && user?.id ? <button className={cl.button} onClick={deleteConference}><Trash /></button> : <></>}
            </header>
            <Line />
            <h2>{ data.title }</h2>
            <span>{ data.datetime }</span>
            <div> { data.text } </div>
        </div>
    )
}