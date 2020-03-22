import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
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
        <Load
          className={
            item.load <= 10 ? 'green' : item.load <= 50 ? 'orange' : 'red'
          }
        >
          <div>
            <Number>{item.load || '?'}%</Number>
            Auslastung
          </div>
          {item.load <= 10 ? (
            <FontAwesomeIcon className="icon" icon={faThermometerQuarter} />
          ) : item.load <= 50 ? (
            <FontAwesomeIcon className="icon" icon={faThermometerHalf} />
          ) : (
            <FontAwesomeIcon
              className="icon"
              icon={faThermometerThreeQuarters}
            />
          )}
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
  display: flex;
  position: absolute;
  right: 20px;
  top: calc(50% - 15px);
  color: #61a854;
  /* yellow: #fdd427 || red: #ff5057 */
  text-align: right;
  font-size: 12px;
  line-height: 1.1;

  div {
    display: grid;
  }

  .icon {
    margin: 3px 0 0 10px;
    font-size: 26px;
  }

  &.green {
    color: #61a854;
  }

  &.orange {
    color: #fcb928;
  }

  &.red {
    color: #ff5057;
  }
`

const Number = styled.strong`
  font-size: 18px;
  font-weight: 700;
`
