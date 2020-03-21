import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Search({ handleChange }) {
  const [message, setMessage] = useState({
    active: false,
    text: '',
    warning: false,
  })

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Addresse" type="text" name="address" />
        <Range step="1" min="1" max="20" type="range" name="distance" />
        <Button type="submit">suchen</Button>
        {message.active && (
          <Answer warning={message.warning}>{message.text}</Answer>
        )}
      </Form>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const address = event.target.address.value
    const distance = event.target.distance.value
    const distanceInMeter = Number(distance) * 1000
    if (address.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Adresse ein.',
        active: true,
        warning: true,
      })
      event.target.address.focus()
    } else {
      setMessage({
        text: `Suchadresse: ${address}
        Entfernung: ${distance}km`,
        active: true,
        warning: false,
      })

      handleChange(address, distanceInMeter)
    }
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Input = styled.input`
  margin-bottom: 4px;
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
`
const Range = styled.input`
  margin-bottom: 4px;
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
`
const Button = styled.button`
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
`
const Answer = styled.p`
  padding: 12px;
  margin: 8px 0;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: ${props => (props.warning ? 'red' : 'green')};
  border-color: ${props => (props.warning ? 'red' : 'green')};
`
