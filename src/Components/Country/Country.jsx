import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
  const [visited,setVisited]=useState(false)

  const handleVisited=()=>{
    if(visited){
      setVisited(false)
    }else setVisited(true)
    handleVisitedCountries(country)
  }
  // console.log()
  return (
    <div className= {`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h4>Capital: {country.capital.capital}</h4>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area> 300000?'Big Country': 'Small Country'}</p>
      <br />
      <button onClick={handleVisited}>{visited?'Visited':'Not visited'}</button>
      <br />
      <button onClick={()=> handleVisitedFlags(country.flags.flags.png)}>Add Visited flage</button>
    </div>
  );
};

export default Country;