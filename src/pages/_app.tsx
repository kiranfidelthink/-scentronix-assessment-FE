import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/utils'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { FunctionComponent, PropsWithChildren } from 'react'

import lightThemeOptions from 'styles/lightThemeOptions'

type MyAppProps = AppProps

const lightTheme: Theme = createTheme(lightThemeOptions)

const Main = styled('main', {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'open'
})(({ theme }) => ({
  display:       'flex',
  flexDirection: 'column',
  flexGrow:      1,
  minHeight:     '100vh',
  transition:    theme.transitions.create(['margin', 'width'], {
    easing:   theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
}))

const MyApp: FunctionComponent<MyAppProps> = (props: PropsWithChildren<MyAppProps>) => {
  const { Component, pageProps } = props

  return (
    <><Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head><ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider></>
  )
}

export default MyApp
