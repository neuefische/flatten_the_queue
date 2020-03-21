import React, { useState, useEffect } from 'react'
import { getDemo } from '../services'
import testdata from '../.mockdata/testdata.json'
import List from '../components/List'

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
      {expressReady && <List list={testdata} />}
    </main>
  )
}
