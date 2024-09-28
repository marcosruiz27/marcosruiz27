import { useParams } from 'react-router-dom'

import countriesData from '../../data/countries.ts'

const Country = () => {
  // Extract the 'code' parameter from the URL
  const { code } = useParams<{ code: string }>()

  // Find the country object in the data array based on the code
  const country = countriesData.find((country) => country.code === code)

  // If country is not found, return a message or a placeholder
  if (!country) {
    return <p>Country not found!</p>
  }

  // Destructure the properties of the country for easier access
  const {
    name,
    capital,
    areaSqKms,
    population,
    currencyCode,
    currencyName,
    neighbours,
    flag,
  } = country

  return (
    <div>
      <h1>
        {flag} {name}
      </h1>
      <ul>
        <li>
          <strong>Capital:</strong> {capital}
        </li>
        <li>
          <strong>Area:</strong> {areaSqKms} km²
        </li>
        <li>
          <strong>Population:</strong> {population}
        </li>
        <li>
          <strong>Currency:</strong> {currencyCode} - {currencyName}
        </li>
        <li>
          <strong>Neighbours:</strong> {neighbours}
        </li>
      </ul>
    </div>
  )
}

export default Country
