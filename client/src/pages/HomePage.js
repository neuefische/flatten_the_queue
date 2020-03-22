import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import styled from 'styled-components/macro'

export default function HomePage({ handleChange }) {
  return (
    <Main>
      <SubHeader>Wo möchtest Du einkaufen?</SubHeader>
      <Search handleChange={handleChange} />
      <Link to="/result">Result</Link>
    </Main>
  )
}

const Main = styled.main`
  overflow-y: scroll;
`

const SubHeader = styled.h2`
  padding: 0 20px;
`
