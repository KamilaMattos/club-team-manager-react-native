import { ThemeProvider } from "styled-components"
import { StatusBar } from "react-native"

import theme from "./src/theme"

import { Groups } from "@screens/Groups"
import { Loading } from "@components/Loading"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {/* <Loading /> */}
      <Groups />
    </ThemeProvider>
  )
}
