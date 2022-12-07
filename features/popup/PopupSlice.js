import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

export const PopupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        togglePopupVisiblity: (state, action) => {
            state.isVisible = action.payload;
        }
    }
})

export const { togglePopupVisiblity } = PopupSlice.actions;

export const selectIsVisible = (state) => state.popup.isVisible;

export default PopupSlice.reducer;