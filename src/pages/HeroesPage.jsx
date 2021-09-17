import React, { useMemo } from 'react'
import { Redirect, useHistory, useParams } from 'react-router'
import getHeroById from '../selectors/getHeroById'

const HeroesPage = () => {
  const { heroId } = useParams()
  const history = useHistory()
  const hero = useMemo((() => getHeroById(heroId)), [heroId])

  if (!hero) {
    return <Redirect to="/" />
  }

  const {
    alter_ego,
    characters,
    id,
    first_appearance,
    publisher,
    superhero,
  } = hero

  const handleBack = () => {
    if (history.length === 1) {
      history.push('/')
    }
    else {
      history.goBack()
    }
  }

  return (
    <div className="container py-5">
      <div className="row animate__animated animate__fadeIn">
        <div className="col-md-5">
          <img
            src={`../assets/heroes/${id}.jpg`}
            className="img-fluid rounded-start"
            alt={superhero}
          />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading mb-5">
            {superhero}
          </h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <b>Alter ego: </b>{ alter_ego }
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>{ publisher }
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>{ first_appearance }
            </li>
          </ul>
          <h5 className="featurette-heading text-muted">Characters</h5>
          <p className="lead mb-5">{ characters }</p>
          <button
            className="btn btn-secondary"
            onClick={ handleBack }
            type="button"
          >Back</button>
        </div>
      </div>
    </div>
  )
}

export default HeroesPage
