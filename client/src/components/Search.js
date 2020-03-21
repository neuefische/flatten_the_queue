import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Search() {
  const [filter, setFilter] = useState({
    street: '',
    houseNumber: new Number(),
    zip: new Number(),
    city: '',
  })

  const [message, setMessage] = useState({
    active: false,
    text: '',
    warning: false,
  })

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <Input placeholder="Straße" type="text" name="street" />
          <Input placeholder="Nummer" type="number" name="houseNumber" />
        </InputRow>
        <Input placeholder="Postleitzahl" type="number" name="zip" />
        <Input placeholder="Stadt" type="text" name="city" />
        <Button type="submit">suchen</Button>
        {message.active && (
          <Answer warning={message.warning}>{message.text}</Answer>
        )}
      </Form>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const street = event.target.street.value
    const houseNumber = event.target.houseNumber.value
    const zip = event.target.zip.value
    const city = event.target.city.value
    if (street.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Straße ein.',
        active: true,
        warning: true,
      })
      event.target.street.focus()
    } else if (!Number(houseNumber) || houseNumber.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Hausnummner ein.',
        active: true,
        warning: true,
      })
      event.target.houseNumber.focus()
    } else if (!Number(zip) || zip.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Postleitzahl ein.',
        active: true,
        warning: true,
      })
      event.target.zip.focus()
    } else if (city.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Stadt ein.',
        active: true,
        warning: true,
      })
      event.target.city.focus()
    } else {
      const search = `${street} ${houseNumber}
      ${zip} ${city}
      `
      setFilter({
        street,
        houseNumber,
        zip,
        city,
      })
      setMessage({
        text: `Suchadresse: ${search}`,
        active: true,
        warning: false,
      })
    }
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const InputRow = styled.section`
  display: grid;
  grid-template: 1fr/ 2fr 1fr;
  grid-gap: 4px;
`

const Input = styled.input`
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
