import React from 'react'
import getHeroesByPublisher from '../selectors/getHeroesByPublisher'
import HeroesListItem from './HeroesListItem'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {
            heroes.map(hero => <HeroesListItem key={hero.id} {...hero} />)
          }
        </div>
      </div>
    </div>
  )
}

export default HeroesList
