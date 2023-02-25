import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:{
        sidebar: 'active',
    },
    reducers:{
        toggleSidebar: (state) => {
            state.sidebar = !state.active;
        }
    }
})

export default sidebarSlice.reducer;
export const {toggleSidebar} = sidebarSlice.actions;
export const selectSidebar = (state) => state.sidebar.sidebar;
