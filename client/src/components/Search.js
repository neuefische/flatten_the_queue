import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Search() {
  const [filter, setFilter] = useState('')

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <Input placeholder="Straße" type="text" name="street" />
          <Input placeholder="Nummer" type="text" name="houseNumber" />
        </InputRow>
        <Input placeholder="Postleitzahl" type="text" name="zip" />
        <Input placeholder="Stadt" type="text" name="city" />
        <Button type="submit">suchen</Button>
        <p>{filter}</p>
      </Form>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const search = `${event.target.street.value} ${event.target.houseNumber.value}
    ${event.target.zip.value} ${event.target.city.value}
    `
    setFilter(search)
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
