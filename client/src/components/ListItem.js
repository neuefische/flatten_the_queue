import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ListItem({ item }) {
  return (
    <Card>
      <Name>{item.name}</Name>
      <Address>
        {item.street},<br />
        {item.zipcode} {item.city}
      </Address>
      <Load>
        <Number>{item.load}</Number>
        Besucher
      </Load>
    </Card>
  )
}

ListItem.propTypes = {
  listItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
  }),
}

const Card = styled.li`
  position: relative;
  padding: 12px;
  background: #eee;
  list-style: none;
  font-family: inherit;
`

const Name = styled.h3`
  margin: 0 0 4px 0;
  font-size: 1.2rem;
  font-weight: 700;
`
const Address = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
  color: #bbb;
`
const Load = styled.strong`
  display: grid;
  grid-template: auto auto;
  position: absolute;
  right: 20px;
  top: calc(50% - 20px);
  color: #bbb;
  text-align: right;
  font-size: 1rem;
  font-weight: 300;
`
const Number = styled.strong`
  font-size: 1.2rem;
  font-weight: 700;
`
