import { JSX } from '@emotion/react/jsx-runtime'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function SettingsLink({
    name,
    handler: Handler,
}: {
    name: string
    handler: React.ComponentType
}): JSX.Element {
    return (
        <Stack
            p="10px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography>{name}</Typography>
            <Handler />
        </Stack>
    )
}
