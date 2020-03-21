import React from 'react'
import styled from 'styled-components/macro'

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

const Card = styled.li`
  position: relative;
  padding: 12px;
  background: #eee;
  list-style: none;
  font-family: inherit;
  border-radius: 5px;
  border: solid 1px rgba(196, 196, 196, 0.6);
  background-color: #ffffff;
  margin-bottom: 5px;
`

const Name = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: bold;
  color: #f77d33;
`

const Address = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #656363;
  margin: 0;
`

const Load = styled.span`
  display: grid;
  grid-template: auto auto;
  position: absolute;
  right: 20px;
  top: calc(50% - 15px);
  color: #61a854;
  text-align: right;
  font-size: 12px;
  line-height: 1.1;
`

const Number = styled.strong`
  font-size: 18px;
  font-weight: 700;
`
