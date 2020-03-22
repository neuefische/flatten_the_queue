import React from 'react'
import styled from 'styled-components/macro'

export default function AboutPage() {
  return (
    <main>
      <h1>Flatten The Queue</h1>
      <p>
        In der aktuellen Situation wird eine Quarantäne dringend empfohlen.
        Sicherheitsabstände müssen eingehalten werden, um das Virus nicht zu
        verbreiten. Dennoch muss jeder seine Einkäufe erledigen und versuchen
        Stoßzeiten abzuwarten. Diese App bietet eine Liste der nächstgelegenen
        Supermärkte mit aktuellem Auslastungs-Status.
      </p>
      <p>
        <Span>Finde ganz easy deinen nächstgelegenen Supermarkt: </Span>
        <ul>
          <li> Gib deine Adresse ein und wähle deinen Suchradius.</li>
          <li>
            Klicke auf den Supermarkt deiner Wahl, um detaillierte Informationen
            zu erhalten.
          </li>
        </ul>
      </p>
      <p></p>
      <p>
        Hilf den anderen Benutzern beim Besuch deines Supermarktes einen genauen
        Status zu erhalten, indem du den Auslastungsstatus auf der Detailseite
        bewerten kannst.
      </p>
      <p>
        Passt aufeinander auf!
        <Motto>Bleibt zusammen stark, aber haltet Abstand.</Motto>
      </p>
    </main>
  )
}

const Span = styled.span`
  display: block;
  font-weight: 600;
`
const Motto = styled.span`
  display: block;
`
