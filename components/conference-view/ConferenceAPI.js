import useSWR from "swr";
import useUser from "../../lib/hooks/useUser";
import axios from "axios";
import Router from "next/router";
import ConferenceView from "./conferenceView";
import cl from "./conference-view.module.scss";
import {Trash} from "../icon/icons";
import {useCallback} from "react";

export default function ConferenceAPI({conference_id}) {
    const { data } = useSWR(`/api/conferences/${conference_id}`)
    const { user } = useUser({redirectTo: '/login'});

    const deleteConference = useCallback(() => {
        axios.delete(
            '/api/conferences/delete',
            {data: {conference_id}}
        ).then(() => Router.push('/'))
    }, [conference_id])

    const DeleteButton = useCallback(() => <button className={cl.button} onClick={deleteConference}><Trash /></button>, [])

    if (!data) {
        return <></>
    }

    return (
        <ConferenceView
            data={data}
            children={user?.id === data.author_id && user?.id ? <DeleteButton /> : <></>}
        />
    )
}