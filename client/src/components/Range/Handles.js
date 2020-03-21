import React from 'react'

export default function Handle({
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 28,
        zIndex: 2,
        width: 25,
        height: 25,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#EE833F',
        color: '#EE833F',
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
        {value}
      </div>
    </div>
  )
}
