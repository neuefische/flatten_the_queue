import React, { useState } from 'react'
import styled from 'styled-components/macro'
import RangeDistance from './RangeDistance/RangeDistance'

export default function Search({ handleChange }) {
  const [message, setMessage] = useState({
    active: false,
    text: '',
    warning: false,
  })
  const [distance, setDistance] = useState(2)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Addresse" type="text" name="address" />
        <RangeDistance setDistance={setDistance} />
        {message.active && (
          <Answer warning={message.warning}>{message.text}</Answer>
        )}
      </Form>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const address = event.target.address.value
    // const distance = event.target.distance.value
    const distanceInMeter = Number(distance) * 1000
    if (address.length === 0) {
      setMessage({
        text: 'Bitte geben Sie eine Adresse ein.',
        active: true,
        warning: true,
      })
      event.target.address.focus()
    } else {
      const encodedAddress = prepareAddressString(address)
      handleChange(encodedAddress, distanceInMeter)
    }
  }

  function prepareAddressString(address) {
    const replacedGermanMutatedVowels = address
      .replace(/\u00c4/g, 'Ae')
      .replace(/\u00e4/g, 'ae')
      .replace(/\u00dc/g, 'Ue')
      .replace(/\u00fc/g, 'ue')
      .replace(/\u00d6/g, 'Oe')
      .replace(/\u00f6/g, 'oe')
      .replace(/\u00df/g, 'ss')
    const encodedAddress = encodeURIComponent(replacedGermanMutatedVowels)
    return encodedAddress
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  margin-bottom: 4px;
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
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
