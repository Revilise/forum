import {createSlice} from "@reduxjs/toolkit";
import deepCopy from "../../lib/tools/DeepCopy";

const init = {
    title: "",
    text: ""
}

export const ConferenceEditorSlice = createSlice({
    name: 'conference-editor',
    initialState: deepCopy(init),
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearAll: (state) => {
            const initCopy = deepCopy(init);
            for (let key in state) {
                state[key] = initCopy[key];
            }
        }
    }
})

export const { setTitle, setText, clearAll} = ConferenceEditorSlice.actions;

export const selectConference = (state) => {
    const { title, text } = state.conference_editor;
    return { title, text };
}

export default ConferenceEditorSlice.reducer;