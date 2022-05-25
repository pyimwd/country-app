import React, { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url) => {
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    (async function test() {
      const response = await fetch(url)
      const data = await response.json()

      const items = data

      setAllData(items)
      setLoading(false)
    })()
  }, [url])

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    setQuery(value)
  }

  const handleFilter = (event) => {
    const value = event.target.value
    setRegion(value)
  }

  function filterData(allData, query, region) {
    return allData.filter((data) => {
      const queryMatch = data.translations.fra.common.toLowerCase().search(query) !== -1
      const regionMatch = data.region.search(region) !== -1
      return queryMatch && regionMatch
    })
  }

  const filteredData = filterData(allData, query, region)

  return {
    loading,
    filteredData,
    handleSearch,
    handleFilter,
  }
}

export default function Fetch() {
  const { loading, filteredData, handleSearch, handleFilter } = useFetch('https://restcountries.com/v3.1/all')

  return (
    <div>
        <div className="row mt-5 mb-5">
            <div className="col-3">
                <input type="text" className="form-control" onChange={handleSearch} placeholder="Search" aria-label="Search" />
            </div>
            <div className='col-6'></div>
            <div class="col-3 d-flex justify-content-end">
                <select id="inputState" onChange={handleFilter} className="form-select" aria-label="Filter by Region">
                    <option value="">Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>

        {loading ?
        (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        ) 
        : 
        (
        <>
        <div className="row">
            {filteredData.map((element, index) => (
              <div className="col-sm-4 mt-2 mb-2">
                <div className="card h-100" key={index}>
                  <div className="card-body">
                  <img src={element?.flags?.svg} className="card-img-top mb-2" alt="flag" />
                    <h5 className="card-title mt-4 mb-4 text-center" style={{color: "#383089"}}>{element?.translations?.fra?.common}</h5>
                    <p className="card-text" style={{color: "#70c9e7"}}>Capitale : {element?.capital?.[0]}</p>
                    <p className="card-text" style={{color: "#70c9e7"}}>Région : {element?.region}</p>
                    <p className="card-text" style={{color: "#70c9e7"}}>Langues : </p>
                    <p className="card-text" style={{color: "#70c9e7"}}>Monnaie : </p>
                    <p className="card-text" style={{color: "#70c9e7"}}>Habitants : {element?.demonyms?.fra?.m}</p>
                    <div class="d-grid d-flex justify-content-end">
                        <a href="#" className="btn btn-primary">En savoir plus</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
        )
        }
    </div>
  )
}