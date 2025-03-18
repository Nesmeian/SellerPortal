import { JSX, useState } from 'react'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
export default function Burger(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
                transition: 'transform 0.3s ease-in-out',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
        >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
    )
}
