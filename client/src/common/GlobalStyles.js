import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    overflow: hidden;
    height: 100vh;
  }

  input, button, textarea {
    font-size: 1em;
  }
`
