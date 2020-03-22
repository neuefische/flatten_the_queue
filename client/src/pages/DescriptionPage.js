import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Range from '../components/Range/Range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useHistory } from 'react-router-dom'

export default function DescriptionPage({ market }) {
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()

  const history = useHistory()
  market.id || history.push('/')
  const [load, setLoad] = useState(0)

  return (
    <Main>
      <h1>{market.name}</h1>
      <Address>
        {market.street}
        <span className="city">{market.city}</span>
      </Address>

      <Status>
        <Visitor>
          <Icon className="icon" icon={faThermometerThreeQuarters} />
          {/* <Icon icon={faThermometerHalf} /> */}
          {/* <Icon icon={faThermometerQuarter} /> */} {market.load || '?'} %
        </Visitor>{' '}
        Auslastung
      </Status>
      <Status>
        <Time>
          <IconClock className="icon" icon={faClock} /> ? Min.
        </Time>{' '}
        verbringen die Meschen in der Regel hier
      </Status>
      <form onSubmit={handleSubmit}>
        <Location>
          <input type="checkbox" id="status" name="status" />
          <label htmlFor="status">
            Ich befinde mich aktuell in diesem Supermarkt
          </label>
        </Location>

        <p>
          Wie ist der aktuelle Stand in diesem Supermarkt?
          <DateStyled>
            {date}.{month}.{year} - {hours}:{minutes} Uhr
          </DateStyled>
        </p>

        <Range setLoad={setLoad} />
        <Submit type="submit">Absenden</Submit>
      </form>
    </Main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const present = event.target.status.checked
    const submit = { ...market, present: present, load: load }
    console.log(event.target)
    console.log('submit', submit)
  }
}

const Main = styled.main`
  display: grid;
  gap: 20px;
`

const DateStyled = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
`

const Status = styled.div``

const Submit = styled.button`
  width: 100%;
  padding: 12px;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  margin: 20px 0 40px 0;
  background-color: #f77d33;
  border: 0;
  border-radius: 20px;
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
  margin-top: 40px;

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

const Visitor = styled.span`
  display: block;
  font-weight: bold;
  color: #61a854;
  margin-right: 5px;
`

const Time = styled.span`
  display: block;
  font-weight: bold;
  color: #61a854;
  margin-right: 5px;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 10px;
  color: #61a854;
  position: relative;
  top: 4px;
  width: 20px;
  display: inline-block;
`

const IconClock = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 10px;
  color: #61a854;
  position: relative;
  left: -4px;
  top: 4px;
  width: 20px;
  display: inline-block;
`
