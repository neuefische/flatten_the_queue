import React from 'react'
import styled from 'styled-components/macro'
import ListItem from './ListItem'

export default function List({ list }) {
  return (
    <ListStyled>
      {list
        .sort((a, b) => Number(a.load) > Number(b.load))
        .map(item => (
          <ListItem item={item} />
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
