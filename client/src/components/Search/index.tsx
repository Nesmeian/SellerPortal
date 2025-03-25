import { JSX } from '@emotion/react/jsx-runtime'
import { InputBase, Stack, useTheme, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export default function Search(): JSX.Element {
    const {
        palette: { mode: theme },
    } = useTheme()
    const [searchState, setSearchState] = useState('')

    return (
        <Stack
            sx={{
                background: theme === 'dark' ? '#333333' : '#f5f5f5',
                width: '50%',
                p: '10px',
                borderRadius: '15px',
            }}
            direction="row"
            alignItems="center"
        >
            <InputBase
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
                placeholder="Search..."
                sx={{
                    width: '100%',
                    color: theme === 'dark' ? 'white' : 'black',
                    fontWeight: 'bold',
                }}
            />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Stack>
    )
}
