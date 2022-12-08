import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    content: {
        header: "",
        text: ""
    }
}

export const PopupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        closePopup: (state) => {
            state.isVisible = false;
        },

        showPopup: (state, action) => {
            state.content = action.payload;
            state.isVisible = true;
        }
    }
})

export const { closePopup, showPopup } = PopupSlice.actions;

export const selectIsPopupVisible = (state) => state.popup.isVisible;
export const selectContent = (state) => state.popup.content;

export default PopupSlice.reducer;