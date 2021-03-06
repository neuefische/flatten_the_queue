import React from 'react'
import styled from 'styled-components/macro'
import ListItem from './ListItem'

export default function List({ list, setMarket }) {
  return (
    <ListStyled>
      {list.length > 0 &&
        list
          .sort((a, b) => Number(a.load) > Number(b.load))
          .map(item => (
            <ListItem key={item.id} item={item} setMarket={setMarket} />
          ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: grid;
  grid-gap: 8px;
  padding: 0;
  width: 100%;
`
