import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromis}) => {
  const [visitedFlags, setVisitedFlags]= useState([])
  const [visitedCountries,setVisitedCountries]=useState([])

  const handleVisitedCountries = (country)=>{
    console.log('visited countries clicked', country)
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlags= (flage) => {
    console.log('flage clicked' ,flage)
    const newVisitedFlags = [...visitedFlags, flage]
    setVisitedFlags(newVisitedFlags)
  }

  const countriesData = use(countriesPromis);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h3>Total visited Countries: {visitedCountries.length}</h3>
      <h3>Total Flags Visited {visitedFlags.length}</h3>

      <div className='visited-flags-container'> 
        {
          visitedFlags.map(flag => <img src= {flag}></img>)
        }
      </div>
      {
        visitedCountries.map(country => <ol>{country.name.common}</ol>)
      }
      <div className='countries'>
        {
          countries.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3} country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;