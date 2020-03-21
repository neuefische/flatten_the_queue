import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ListItem({ item }) {
  return (
    <Card>
      <Name>{item.name}</Name>
      <Address>
        {item.street}, {item.zipcode} {item.city}
      </Address>
      <Load>{item.load}</Load>
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
  font-family: Arial, Helvetica, sans-serif;
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
  position: absolute;
  right: 20px;
  top: calc(50% - 12px);
  color: #bbb;
`
