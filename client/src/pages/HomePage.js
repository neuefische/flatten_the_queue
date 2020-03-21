import React, { useState, useEffect } from 'react'
import { getDemo } from '../services'

export default function HomePage() {
  const [expressReady, setExpressReady] = useState(false)

  // testing the server
  useEffect(() => {
    getDemo()
      .then(res => setExpressReady(res.data.demo === 'works'))
      .catch(res => console.log(res))
  })

  return (
    <main>
      <h1>Home</h1>
      {expressReady && 'express is ready'}
    </main>
  )
}
