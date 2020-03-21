import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useCookies } from 'react-cookie'
import Navigation from './common/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { getUser, createUser } from './services'

export default function App() {
  const [cookies, setCookies] = useCookies(['userId'])
  const [user, setUser] = useState()

  function onChange(newUserId) {
    setCookies('userId', newUserId, { path: '/' })
  }

  useEffect(() => {
    console.log('userId Cookie', cookies.userId)
  }, [cookies])

  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    if (cookies.userId) {
      // get the user
      // GET /user/:id
      setUser(getUser(userId))
    } else {
      // create a new user
      // POST /user
      const user = createUser()
      setCookies('userId', user._id, { path: '/' })
      setUser(user)
    }
  })

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
