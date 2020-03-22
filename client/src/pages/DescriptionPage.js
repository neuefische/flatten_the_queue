import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Range from '../components/Range/Range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
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
      <SubHeader>{market.name}</SubHeader>
      <Address>
        {market.street}
        <span className="city">{market.city}</span>
      </Address>

      <Status>
        <Icon className="icon" icon={faThermometerThreeQuarters} />
        {/* <Icon icon={faThermometerHalf} /> */}
        {/* <Icon icon={faThermometerQuarter} /> */}
        Auslastung: <Visitor>{market.load || '?'}%</Visitor>
        <p>
          In der Regel verbringen Meschen hier: <Time>? Minuten</Time>
        </p>
      </Status>
      <Form onSubmit={handleSubmit}>
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
      </Form>
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

const DateStyled = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
`

const Main = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  background: #fff;
`
const SubHeader = styled.h1`
  margin-top: 35px;

  font-size: 1.4rem;
  color: #ee833f;
`

const Form = styled.form``

const Submit = styled.button`
  width: 100%;
  border: 2px solid #bbb;
  padding: 12px;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
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
