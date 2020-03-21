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
      <p>
        Livestatus: weniger Besucher als gewöhnlich
        <br />
        In der Regel verbringen Meschen hier: 20 Min.
      </p>

      <input type="checkbox" id="status" name="status" />
      <label for="status"> Ich befinde mich aktuell in diesem Supermarkt</label>

      <p>Wie ist der aktuelle Status in diesem Markt?</p>
      <p>
        {date}.{month}.{year} - {hours}:{minutes}
      </p>
      <p></p>

      <Range />
    </Main>
  )
}

const Main = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  background: #fff;
  font-size: 14px;
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
