import React from 'react'
import styled from 'styled-components/macro'
import List from '../components/List'
import Search from '../components/Search'

export default function HomePage({ handleChange, list, setMarket }) {
  return (
    <Main>
      <SubHeader>Supermärkte in der Nähe ...</SubHeader>
      <Search handleChange={handleChange} />
      <List list={list} setMarket={setMarket} />
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
