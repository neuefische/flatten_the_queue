import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function ListItem({ item, setMarket }) {
  console.log(item)
  // //   city: "Hamburg"
  // // ​
  // // id: "f0a23bd1dd2a1227d8b9f68c9e89b76c68ba3b3e"
  // // ​
  // // name: "METRO"
  // // ​
  // // street: "Papenreye 33"
  return (
    <NavLinkStyled onClick={handleClickOnMarket} to="/description">
      <Card>
        <Name>{item.name}</Name>
        <Address>
          {item.street},<br />
          {item.city}
        </Address>
        <Load>
          <Number>{item.load || '?'}%</Number>
          Auslastung
        </Load>
      </Card>
    </NavLinkStyled>
  )
  function handleClickOnMarket() {
    setMarket(item)
  }
}

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`
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
