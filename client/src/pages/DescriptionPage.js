import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Range from '../components/Range/Range'
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
        Livestatus: <Visitor>? Besucher</Visitor>
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

// const Main = styled.main`
//   margin-top: 35px;
//   padding: 0 20px;
//   overflow-y: scroll;
//   height: 100vh;
// `
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
  border: 1px solid black;
  padding: 8px;
  width: 100%;
  color: inherit;
  font-family: inherit;
`

const Address = styled.h2`
  font-weight: 500;
  font-size: 18px;

  .city {
    display: block;
  }
`
const Location = styled.div`
  display: flex;
  margin-top: 60px;

  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 17px;
      height: 17px;
      border: 2px solid #ee833f;
      border-radius: 3px;
    }
    &:after {
      content: '✓';
      position: relative;
      left: -125px;
      top: -25px;
      font-size: 18px;
      color: #ee833f;
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
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
