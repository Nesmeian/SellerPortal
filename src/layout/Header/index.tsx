import { Stack, useTheme } from '@mui/material'
import { ReactElement } from 'react'
import UserBadge from '../../components/UserBadge'
import Burger from '../../components/Burger'

export default function Header(): ReactElement {
    const mode = useTheme()

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
                borderLeft: 'none',
                borderTopRightRadius: '15px',
            }}
        >
            <Burger />

            <UserBadge />
        </Stack>
    )
}
