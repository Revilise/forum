import {configureStore} from '@reduxjs/toolkit';
import ConferenceEditorReducer from "../features/conference-editor/ConferenceEditorSlice";
import ConferenceListReducer from "../features/conference-list/ConferenceListSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            conference_editor: ConferenceEditorReducer,
            conferences_list: ConferenceListReducer
        }
    })
}

const store = makeStore();
export default store;