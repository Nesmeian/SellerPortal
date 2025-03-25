import { Box, Stack, Typography, useTheme } from '@mui/material'
import { JSX } from 'react'
import SideBarLink from '../../components/SideBarLink'
import CampaignIcon from '@mui/icons-material/Campaign'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AppSettings from '../../components/SidebarSettings'

export default function Sidebar(): JSX.Element {
    const mode = useTheme()
    const themeColor = mode.palette.mode === 'dark' ? '#121619' : '#1A202E'
    return (
        <Stack
            overflow="hidden"
            direction="column"
            justifyContent="space-between"
            sx={{
                background: themeColor,
                width: '20%',
                height: '96vh',
                borderRadius: '15px 0 0 15px ',
                color: '#CFD8E3',
            }}
        >
            <Box>
                <Typography p="20px" variant="h5" component={'h1'}>
                    Accounting
                </Typography>
                <SideBarLink img={CampaignIcon} name="Advertisement" />
                <SideBarLink img={ShoppingCartIcon} name="Orders" />
            </Box>
            <AppSettings />
        </Stack>
    )
}
