import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f8f8f8;
    font-family: 'Lato', sans-serif;;
    font-size: 18px;
    line-height: 1.4;
    overflow: hidden;
    height: 100vh;
  }

  input, button, textarea {
    font-size: 1em;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.22;
    color: #f77d33;
    margin-top:0;
  }

  main {
    padding: 30px;
    overflow-y: scroll;
  }
`
