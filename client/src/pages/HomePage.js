import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import styled from 'styled-components/macro'

export default function HomePage({ handleChange }) {
  return (
    <Main>
      <SubHeader>Supermärkte in der Nähe ...</SubHeader>
      <Search handleChange={handleChange} />
      <Link to="/result">Result</Link>
    </Main>
  )
}

const Main = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  background: #fff;
`

const SubHeader = styled.h2`
  font-size: 1.4rem;
`
