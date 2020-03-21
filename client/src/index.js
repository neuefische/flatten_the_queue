import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie'
import GlobalStyles from './common/GlobalStyles'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <CookiesProvider>
    <GlobalStyles />
    <App />
  </CookiesProvider>,
  rootElement
)

serviceWorker.unregister()
