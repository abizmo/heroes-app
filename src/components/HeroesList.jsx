import React, { useMemo } from 'react'
import getHeroesByPublisher from '../selectors/getHeroesByPublisher'
import getHeroesBySuperhero from '../selectors/getHeroesBySuperhero'
import HeroesListItem from './HeroesListItem'

const HeroesList = ({ publisher, superhero }) => {
  const heroes = useMemo((() => !!publisher
    ? getHeroesByPublisher(publisher)
    : getHeroesBySuperhero(superhero)
    // esto es lo que se pedía en el curso, pero me gusta más mandando todo
    // : ( superhero === '' ? [] : getHeroesBySuperhero(superhero))
  ), [publisher, superhero])

  return (
    <div className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 animate__animated animate__fadeIn">
          {
            heroes.length === 0
            ? (
              <div className="alert alert-warning">
                No hero found!
              </div>
            )
            : heroes.map(hero => <HeroesListItem key={hero.id} {...hero} />)
          }
        </div>
      </div>
    </div>
  )
}

export default HeroesList
