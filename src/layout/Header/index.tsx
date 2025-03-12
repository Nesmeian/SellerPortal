import { Stack, useTheme } from '@mui/material'
import { Menu as Burger } from '@mui/icons-material'
import { ReactElement } from 'react'
import UserBadge from '../../components/UserBadge'
import Search from '../../components/Search'
import { useDispatch } from 'react-redux'
import ThemeSwitch from '../../components/ThemeSwitchIcon'
import { themeToggler } from '../../reduxStore/themeSlice'

export default function Header(): ReactElement {
    const mode = useTheme()
    const dispatch = useDispatch()
    const themeColor = mode.palette.mode === 'dark' ? '#4A4A4A' : '#E0E0E0'

    return (
        <Stack
            pt="10px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                p: '10px 20px',
                border: `1px solid ${themeColor}`,
                borderBottom: 'none',
                borderRadius: '15px 15px 0 0',
            }}
        >
            <Burger />
            <ThemeSwitch
                onClick={() => {
                    dispatch(themeToggler())
                }}
            />
            <Search />
            <UserBadge />
        </Stack>
    )
}
