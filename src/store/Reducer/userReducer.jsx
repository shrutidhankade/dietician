import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin: null,
    isAuth: false,
}

export const adminSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        saveuser: (state, action) => {
            state.admin = action.payload;
            state.isAuth = true;
        },
        removeadmin: (state, action) => {
            state.admin = null;
            state.isAuth = false;
        },
       

    },
})

// Action creators are generated for each case reducer function
export const { saveadmin, removeadmin} = adminSlice.actions

export default adminSlice.reducer