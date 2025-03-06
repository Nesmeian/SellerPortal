import { Avatar, Container } from '@mui/material'
import logo from '/logo.jfif'
export default function UserBadge(): JSX {
    return (
        <Container>
            <Avatar alt="Logo" src={logo}></Avatar>
        </Container>
    )
}
