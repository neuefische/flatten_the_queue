import React from 'react'
import styled from 'styled-components/macro'
import List from '../components/List'
import Search from '../components/Search'

export default function HomePage({ handleChange, list }) {
  return (
    <Main>
      <h1>Supermärkte in deiner Nähe</h1>
      <Search handleChange={handleChange} />
      <List list={list} />
    </Main>
  )
}

const Main = styled.main`
  overflow-y: scroll;
`
