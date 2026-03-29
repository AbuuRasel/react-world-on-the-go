import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromis = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <div>
      <Suspense fallback= {<p>Nadir on the goo...</p>}>
      <Countries countriesPromis= {countriesPromis}></Countries>
      </Suspense>
    </div>
  )
}

export default App
