import React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from './src/global/style/theme'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Loading } from './src/components/Loading'

import { SignIn } from './src/screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}
