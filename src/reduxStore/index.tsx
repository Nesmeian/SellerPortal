import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'

export const store = configureStore({
    reducer: themeSlice.reducer,
})
export type RootState = ReturnType<typeof store.getState>
