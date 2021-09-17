import React from 'react'
import { Link } from 'react-router-dom'

const HeroesListItem = ({
  id,
  superhero,
}) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="align-items-center card-body d-flex flex-column h-100 justify-content-around">
              <h5 className="card-title text-center">{superhero}</h5>
              <Link className="btn btn-sm btn-outline-primary" to={`heroes/${id}`}>View more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroesListItem
