import { Avatar, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ReactElement } from 'react'

export default function Header(): ReactElement {
    return (
        <Stack direction="row" justifyContent="space-between">
            <MenuIcon />
        </Stack>
    )
}
