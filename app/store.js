import {configureStore} from '@reduxjs/toolkit';
import ConferenceEditorReducer from "../features/conference-editor/ConferenceEditorSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            conference_editor: ConferenceEditorReducer,
        }
    })
}

const store = makeStore();
export default store;