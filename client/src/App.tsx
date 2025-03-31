import Header from './layout/Header'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from './theme'
import { Box, CssBaseline, Stack } from '@mui/material'
import Sidebar from './layout/Sidebar'

function App(): React.JSX.Element {
    const theme = useAppTheme()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Stack direction="row" margin="5px 10px">
                <Sidebar />
                <Box width="100%">
                    <Header />
                </Box>
            </Stack>
        </ThemeProvider>
    )
}

export default App
