import { Stack, SvgIconTypeMap, Typography } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { JSX } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface SideBarLinkProps {
    name: string
    img: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
}
export default function SideBarLink({
    img: Icon,
    name,
}: SideBarLinkProps): JSX.Element {
    return (
        <Stack
            direction="row"
            p="20px"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                '&:hover': {
                    background: '#121620',
                    cursor: 'pointer',
                },
                '&:hover .icon': {
                    animation: 'wave 0.3s ease-in-out infinite',
                },
                '@keyframes wave': {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            }}
        >
            <Stack direction="row" gap="10px">
                <Icon className="icon" />
                <Typography>{name}</Typography>
            </Stack>
            <ArrowForwardIosIcon fontSize="inherit" />
        </Stack>
    )
}
