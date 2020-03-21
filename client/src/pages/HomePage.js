import React, { useState, useEffect } from 'react'
import { getNearbyMarkets } from '../services'
import List from '../components/List'
import Search from '../components/Search'
import styled from 'styled-components/macro'
import { getMarketsByZipCode } from '../common/utils'

export default function HomePage() {
  const [list, setList] = useState([])
  // testing the server
  useEffect(() => {
    getNearbyMarkets('Hamburg')
      .then(res => setList(res.data))
      .catch(res => console.error(res))
  }, [])

  return (
    <Main>
      <>
        <SubHeader>Supermärkte in der Nähe ...</SubHeader>
        <Search handleChange={handleChange} />
        <List list={list} />
      </>
      )
    </Main>
  )
  function handleChange(filter) {
    const filteredMarkets = getMarketsByZipCode(filter, list)
    filteredMarkets !== -1 ? setList(filteredMarkets) : setList(testdata)
  }
}

const Main = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  background: #fff;
`

const SubHeader = styled.h2`
  font-size: 1.4rem;
`
