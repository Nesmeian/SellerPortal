import React, { useState } from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { JSX } from '@emotion/react/jsx-runtime'
import i18n from '../../../../public/language'

export default function LanguageSwitch(): JSX.Element {
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    const changeLanguage = (language: string): void => {
        i18n.changeLanguage(language)
    }
    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSelectedLanguage(event.target.value)
        changeLanguage(event.target.value)
    }
    const stopPropagation = (event: React.MouseEvent): void => {
        event.stopPropagation()
    }

    return (
        <RadioGroup
            row
            value={selectedLanguage}
            onChange={handleLanguageChange}
        >
            <FormControlLabel
                value="eng"
                onClick={stopPropagation}
                sx={{ margin: '0' }}
                control={<Radio />}
                label={<span>En</span>}
            />
            <FormControlLabel
                value="rus"
                onClick={stopPropagation}
                control={<Radio />}
                sx={{ margin: '0' }}
                label={<span>Rus</span>}
            />
        </RadioGroup>
    )
}
