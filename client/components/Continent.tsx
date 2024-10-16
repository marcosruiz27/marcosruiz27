import { useParams } from 'react-router-dom'

import continentsData from '../../data/continents.ts'

import { Link } from 'react-router-dom'

const Continent = () => {
  const { name } = useParams<{ name: string }>() // Extract 'name' parameter from the URL

  // Find the continent object that matches the 'name' parameter
  const continent = continentsData[name] // Access the continent directly using the name

  // Get the list of countries or set to an empty array if not found
  const countries = continent ? continent.countries : [] // If continent is not found, set to empty array

  return (
    <div>
      <h1>Countries in {name}</h1>
      {continent && continent.image && (
        <img src={`/public/images/${continent.image}`} alt="" />
      )}
      {/* Display the list of countries */}
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.code}>
              {/* Wrap country name in a Link to navigate to the Country component */}
              <Link to={`/country/${country.code}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No countries available for this continent.</p>
      )}
    </div>
  )
}

export default Continent
