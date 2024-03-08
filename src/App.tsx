import { GlobalStyle } from "./components/styles/global"
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./components/styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div><h1>Hello world</h1></div>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
