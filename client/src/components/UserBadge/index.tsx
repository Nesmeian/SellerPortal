import { Avatar, Box, Stack, Typography } from '@mui/material'
import userImg from '../../image/userImg.jfif'
import { JSX } from '@emotion/react/jsx-runtime'
export default function UserBadge(): JSX.Element {
    const firstName = 'Leonid'
    const secondName = 'Kozlovskiy'
    const role = 'Admin'
    return (
        <Stack direction="row">
            <Avatar alt="Logo" src={userImg}></Avatar>
            <Box>
                <Typography>{`${firstName} ${secondName}`}</Typography>
                <Typography>{role}</Typography>
            </Box>
        </Stack>
    )
}
