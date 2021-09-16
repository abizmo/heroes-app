import React from 'react'
import getHeroesByPublisher from '../selectors/getHeroesByPublisher'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <ul>
      {
        heroes.map(hero => <li>{hero.superhero}</li>)
      }
    </ul>
  )
}

export default HeroesList
