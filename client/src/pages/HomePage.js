import React from 'react'
import styled from 'styled-components/macro'
import List from '../components/List'
import Search from '../components/Search'

export default function HomePage({ handleChange, list, setMarket }) {
  return (
    <Main>
      <h1>Supermärkte in deiner Nähe</h1>
      <Search handleChange={handleChange} />
      <List list={list} setMarket={setMarket} />
    </Main>
  )
}

const Main = styled.main`
  overflow-y: scroll;
`
