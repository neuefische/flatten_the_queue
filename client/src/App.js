import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import DescriptionPage from './pages/DescriptionPage'
import ResultPage from './pages/ResultPage'
import { getNearbyMarkets } from './services'

export default function App() {
  const [list, setList] = useState([])
  const [market, setMarket] = useState({})

  return (
    <Router>
      <AppGrid>
        <Header>flatten the queue</Header>
        <Switch>
          <Route exact path="/">
            <HomePage
              handleChange={handleChange}
              list={list}
              setMarket={setMarket}
            />
          </Route>
          <Route path="/result">
            <ResultPage market={market} />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/description">
            <DescriptionPage market={market} />
          </Route>
        </Switch>
        <Navigation />
      </AppGrid>
    </Router>
  )

  function handleChange(address, distance) {
    getNearbyMarkets(address, distance)
      .then(res => setList(res.data))
      .catch(res => console.error(res))
  }
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
