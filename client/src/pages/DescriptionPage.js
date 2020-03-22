import React from 'react'
import styled from 'styled-components/macro'
import Range from '../components/Range/Range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'

export default function DescriptionPage() {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()

  return (
    <main>
      <h1>NAME</h1>
      <Address>
        Brauerknwachtgraben 47,
        <span className="city">23500 Hamburg </span>
      </Address>

      <Status>
        <Icon className="icon" icon={faThermometerThreeQuarters} />
        {/* <Icon icon={faThermometerHalf} /> */}
        {/* <Icon icon={faThermometerQuarter} /> */}
        <div>
          Livestatus: <Visitor>26 Besucher</Visitor>
        </div>
      </Status>
      <Status>
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
          {date}.{month}.{year} - {hours}:{minutes} Uhr
        </DateStyled>
      </p>

      <Range />
    </main>
  )
}

const DateStyled = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
`

const Address = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #494947;
  margin-top: 0;

  .city {
    display: block;
  }
`
const Location = styled.div`
  display: flex;
  margin-top: 60px;

  input {
    display: none;
  }

  input + label {
    padding-left: 35px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 17px;
      height: 17px;
      border: 2px solid #ee833f;
      border-radius: 3px;
    }

    &:after {
      content: '✓';
      position: absolute;
      left: 3px;
      top: 1px;
      font-size: 18px;
      color: #ee833f;
      transition: all 0.2s;
    }
  }

  input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
`
const Status = styled.div`
  font-size: 14px;
  display: flex;
`
const Visitor = styled.span`
  display: block;
`
const Time = styled.span`
  display: block;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin-right: 10px;
  color: #61a854;
  position: relative;
  top: 4px;
`
