import React from 'react'
import styled from 'styled-components/macro'
import List from '../components/List'
import Search from '../components/Search'

export default function HomePage({ handleChange, list }) {
  return (
    <Main>
      <SubHeader>Wo möchtest Du einkaufen?</SubHeader>
      <Search handleChange={handleChange} />
      <List list={list} />
    </Main>
  )
}

const Main = styled.main`
  overflow-y: scroll;
`

const SubHeader = styled.h2`
  padding: 0 20px;
`
