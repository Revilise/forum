import {useState} from "react";
import Search from "./Search";
import {setFilters} from "../../features/conference-list/ConferenceListSlice";
import {useDispatch} from "react-redux";

export default function SearchAPI() {
    const [input, changeInput] = useState('');
    const dispatch = useDispatch();

    function onSubmit() {
        dispatch(setFilters({keyword: input}))
    }

    return <Search value={input} onChange={e => changeInput(e.target.value)} onSubmit={onSubmit} />
}