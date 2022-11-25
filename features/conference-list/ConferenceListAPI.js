import ConferenceList from "./ConferenceList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectConfig, setConferences} from "./ConferenceListSlice";
import axios from "axios";

export default function ConferenceListAPI() {
    const { conferences, filters } = useSelector(selectConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        let query = ""
        for (let key in filters) {
            query += `${key}=${filters[key]}`
        }

        axios.get(process.env.NEXT_PUBLIC_APP_HOSTNAME+'/api/conferences/get-list/'+query).then(res => {
            dispatch(setConferences(res.data))
        })
    }, [filters])

    return <ConferenceList items={conferences} />
}