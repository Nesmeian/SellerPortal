import { JSX } from '@emotion/react/jsx-runtime'
import { InputBase, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
export default function Search(): JSX.Element {
    const theme = useTheme().palette.mode
    return (
        <Stack
            sx={{
                background: theme === 'dark' ? '#333333' : '#f5f5f5',
                width: '50%',
                p: '10px',
                borderRadius: '15px',
            }}
            direction={'row'}
            alignItems={'center'}
        >
            <InputBase
                placeholder="Search..."
                sx={{ width: '100%', color: 'black', fontWeight: 'bold' }}
            ></InputBase>
            <SearchIcon />
        </Stack>
    )
}
