import React from 'react'
import styled from 'styled-components/macro'
import Range from '../components/Range/Range'

export default function DescriptionPage() {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()

  return (
    <Main>
      <SubHeader>NAME</SubHeader>
      <Address>
        Brauerknwachtgraben 47,
        <span className="city">Hamburg 23500</span>
      </Address>

      <Status>
        Livestatus: <Visitor>26 Besucher</Visitor>
        <p>
          In der Regel verbringen Meschen hier: <Time>20 Minuten</Time>
        </p>
      </Status>

      <Location>
        <input type="checkbox" id="status" name="status" />
        <label for="status">
          Ich befinde mich aktuell in diesem Supermarkt
        </label>
      </Location>

      <p>
        Wie ist der aktuelle Stand in diesem Supermarkt?
        <DateStyled>
          {date}.{month}.{year} - {hours}:{minutes}
        </DateStyled>
      </p>

      <Range />
    </Main>
  )
}

const DateStyled = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
`

const Main = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  background: #fff;
  height: 100vh;
`
const SubHeader = styled.h1`
  font-size: 1.4rem;
  color: #ee833f;
`

const Address = styled.h2`
  font-size: 1.4rem;

  .city {
    display: block;
  }
`
const Location = styled.div`
  display: flex;
`
const Status = styled.div`
  font-size: 14px;
`
const Visitor = styled.span`
  display: block;
`
const Time = styled.span`
  display: block;
`
