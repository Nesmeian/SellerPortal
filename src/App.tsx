import Header from './layout/Header'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from './theme'
import { JSX } from '@emotion/react/jsx-runtime'
import { Box, Button, CssBaseline, Stack } from '@mui/material'
import Sidebar from './layout/Sidebar'
import { useTranslation } from 'react-i18next'
function App(): JSX.Element {
    const theme = useAppTheme()
    const { t, i18n } = useTranslation()
    const changeLanguage = (language): void => {
        i18n.changeLanguage(language)
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Stack direction="row" margin="5px 10px">
                <Sidebar />
                <Box width="100%">
                    <Header />
                </Box>
            </Stack>
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('ru')}>RU</Button>
            <Box>{t('text')}</Box>
        </ThemeProvider>
    )
}

export default App
