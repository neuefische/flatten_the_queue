import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

export default function App() {
  return (
    <Router>
      <AppGrid>
        <Header>flatten the queue</Header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/result">
            <ResultPage />
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
  grid-template-rows: 48px auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

const Header = styled.header`
  text-align: center;
  background-color: #f77d33;
  color: #fff;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  letter-spacing: 1px;
`
