import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

export default function List({ list }) {
  return (
    <ListStyled>
      {list.map(item => (
        <ListItem item={item} />
      ))}
    </ListStyled>
  )
}

List.propTypes = {
  list: PropTypes.shape([
    {
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      load: PropTypes.number.isRequired,
    },
  ]),
}

const ListStyled = styled.ul`
  display: grid;
  grid-gap: 4px;
  padding: 0;
  width: 100%;
`
