import {createSlice} from "@reduxjs/toolkit";
import deepCopy from "../../lib/tools/DeepCopy";

const init = {
    filters: {},
    conferences: []
}

export const ConferenceListSlice = createSlice({
    name: 'conferences-list',
    initialState: deepCopy(init),
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        setConferences: (state, action) => {
            state.conferences = [...action.payload];
        }
    }
})

export const { setFilters, setConferences } = ConferenceListSlice.actions;

export const selectConfig = (state) => {
    const { conferences, filters } = state.conferences_list;
    return { conferences, filters };
}

export default ConferenceListSlice.reducer;