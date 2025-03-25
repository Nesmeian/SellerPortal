import { Box, Stack, Typography, useTheme } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { JSX, useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import SettingsLink from './SettingsLink'
import ThemeSwitch from '../Switchers/ThemeSwitch'
import LanguageSwitch from '../Switchers/LanguageSwitch'
import { useTranslation } from 'react-i18next'
const MotionBox = motion.create(Box)
export default function AppSettings(): JSX.Element {
    const [showBox, setShowBox] = useState(false)

    const toggler = (): void => {
        if (showBox) {
            setShowBox(false)
        } else {
            setShowBox(true)
        }
    }
    return (
        <Stack onClick={toggler} overflow={'hidden'}>
            <AnimatePresence>
                {showBox ? (
                    <BoxAper key="box" toggler={toggler} />
                ) : (
                    <MotionBox
                        sx={{
                            p: '20px',
                            display: 'flex',
                            gap: '10px',
                            cursor: 'pointer',
                            '&:hover svg': {
                                animation: 'spin 1s linear infinite',
                            },
                            '@keyframes spin': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(120deg)' },
                            },
                        }}
                        onClick={toggler}
                        key="setting"
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        layout
                    >
                        <SettingsIcon />
                        <Typography>Settings</Typography>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Stack>
    )
}

function BoxAper({ toggler }: { toggler: () => void }): JSX.Element {
    const mode = useTheme().palette.mode
    const { t } = useTranslation()
    return (
        <MotionBox
            onClick={toggler}
            key="settingsBox"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            layout
            sx={{
                background: mode === 'dark' ? '#1E1E2F' : '#212121',
            }}
        >
            <SettingsLink name={t('themeSetting')} handler={ThemeSwitch} />
            <SettingsLink
                name={t('languageSetting')}
                handler={LanguageSwitch}
            />
        </MotionBox>
    )
}
