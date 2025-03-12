import { Stack, Typography } from '@mui/material'
import { JSX } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
export default function AppSettings(): JSX.Element {
    return (
        <Stack
            direction="row"
            p="20px"
            gap="10px"
            sx={{
                '&:hover svg': {
                    animation: 'spin 1s linear infinite',
                },
                '@keyframes spin': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        transform: 'rotate(120deg)',
                    },
                },
            }}
        >
            <SettingsIcon />
            <Typography>Settings</Typography>
        </Stack>
    )
}
