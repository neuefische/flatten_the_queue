import React from 'react'
import styled from 'styled-components/macro'

export default function Handle({
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <Handler
      style={{
        left: `${percent}%`,
      }}
      {...getHandleProps(id)}
    >
      <RangeLabel>
        {value === 1
          ? 'leer'
          : value === 2
          ? 'fast leer'
          : value === 3
          ? 'fast voll'
          : 'voll'}
      </RangeLabel>
    </Handler>
  )
}

const RangeLabel = styled.div`
  font-size: 12px;
  margin-top: -20px;
  margin-left: -25px;
  width: 70px;
`
const Handler = styled.div`
  position: absolute;
  margin-left: -15px;
  margin-top: 30px;
  z-index: 2;
  width: 20px;
  height: 20px;
  border: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #ee833f;
  color: #ee833f;
`
