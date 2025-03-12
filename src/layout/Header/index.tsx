import { Stack, useTheme } from '@mui/material'
import { Menu as Burger } from '@mui/icons-material'
import { ReactElement } from 'react'
import UserBadge from '../../components/UserBadge'
import { useDispatch } from 'react-redux'
import ThemeSwitch from '../../components/ThemeSwitchIcon'
import { themeToggler } from '../../store/themeSlice'

export default function Header(): ReactElement {
    const mode = useTheme()
    const dispatch = useDispatch()
    const themeColor = mode.palette.mode === 'dark' ? '#4A4A4A' : '#E0E0E0'

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                p: '10px 20px',
                border: `1px solid ${themeColor}`,
                borderBottom: 'none',
                borderTopRightRadius: '15px',
            }}
        >
            <Burger />
            <ThemeSwitch
                onClick={() => {
                    dispatch(themeToggler())
                }}
            />
            <UserBadge />
        </Stack>
    )
}
