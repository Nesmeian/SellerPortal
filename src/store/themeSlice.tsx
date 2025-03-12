import { createSlice } from '@reduxjs/toolkit'
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeMode: 'light',
    },
    reducers: {
        themeToggler: (state) => {
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'
        },
    },
})
export const { themeToggler } = themeSlice.actions
