import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Search({ handleChange }) {
  const [filter, setFilter] = useState('')

  return <Input placeholder="Suche ..." onChange={onChange} value={filter} />
  function onChange(event) {
    setFilter(event.target.value)
    handleChange(event.target.value)
  }
}

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
`
