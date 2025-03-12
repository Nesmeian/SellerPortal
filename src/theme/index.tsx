import { createTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { Theme } from '@emotion/react'
import { RootState } from '../reduxStore'
export const useAppTheme = (): Theme => {
    const mode = useSelector((state: RootState) => state.themeMode)
    return createTheme({
        typography: {
            fontFamily: '"Poppins",  "Arial", sans-serif',
            body1: { fontSize: '1rem' },
        },

        palette: {
            mode: mode === 'dark' ? 'dark' : 'light',
        },
    })
}
