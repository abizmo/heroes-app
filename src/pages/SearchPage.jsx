import queryString from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import HeroesList from '../components/HeroesList'
import useForm from '../hooks/useForm'

const SearchPage = () => {
  const history = useHistory()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [{ search }, handleInputs ] = useForm({ search: q })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    history.push(`?q=${ search }`)
  }

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <h4 className="featurette-heading mb-4">Search</h4>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            aria-label="Search"
            autoComplete="off"
            className="form-control me-2"
            name="search"
            onChange={handleInputs}
            placeholder="Search your hero"
            type="search"
            value={search}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
          >Search</button>
        </form>
      </div>
      <div className="row">
        <h4 className="featurette-heading mb-4">Heroes</h4>
        <HeroesList superhero={q} />
      </div>
    </div>
  )
}

export default SearchPage
