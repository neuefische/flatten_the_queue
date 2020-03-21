import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Search() {
  return <Input placeholder="Suche ..." />
}

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 2px solid #bbb;
  font-family: inherit;
  color: inherit;
`
