import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import testData from './common/testdata.json'
import { getMarketsByZipCode } from './common/utils'

export default function App() {
  console.log(getMarketsByZipCode(12345, testData))
  return (
    <Router>
      <AppGrid>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <Navigation />
      </AppGrid>
    </Router>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
