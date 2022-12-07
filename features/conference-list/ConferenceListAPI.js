import ConferenceList from "./ConferenceList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectConfig, setConferences} from "./ConferenceListSlice";
import axios from "axios";

export default function ConferenceListAPI({
    route = "get-list"
}) {
    const { filters } = useSelector(selectConfig);
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        let query = ""
        for (let key in filters) {
            query += `${key}=${filters[key]}`
        }

        axios.get(process.env.NEXT_PUBLIC_APP_HOSTNAME+`/api/conferences/${route}/${query}`).then(res => {
            setConferences(res.data)
        })
    }, [filters])

    return <ConferenceList items={conferences} />
}