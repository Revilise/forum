import useSWR from "swr";
import useUser from "../../lib/auth/useUser";
import axios from "axios";
import Router from "next/router";
import ConferenceView from "../../components/conference-view/conferenceView";
import cl from "../../components/conference-view/conference-view.module.scss";
import {Trash} from "../../components/icon/icons";
import {useCallback} from "react";

export default function ConferenceApi({conference_id}) {
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