import Header from './layout/Header'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from './theme'
import './style.scss'
import { JSX } from '@emotion/react/jsx-runtime'
import { CssBaseline } from '@mui/material'
function App(): JSX.Element {
    const theme = useAppTheme()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
        </ThemeProvider>
    )
}

export default App
