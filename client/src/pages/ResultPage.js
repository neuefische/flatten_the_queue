import React from 'react'
import List from '../components/List'

export default function ResultPage({ list }) {
  return (
    <main>
      <h1>Supermärkte in Deiner Nähe</h1>
      <List list={list} />
    </main>
  )
}
