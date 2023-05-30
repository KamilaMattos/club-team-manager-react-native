import { ThemeProvider } from "styled-components"

import theme from "./src/theme"

import { Groups } from "@screens/Groups"
import { Loading } from "@components/Loading"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Groups />
    </ThemeProvider>
  )
}
