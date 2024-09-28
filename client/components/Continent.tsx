import { useParams } from 'react-router-dom'

import continentsData from '../../data/continents.ts'

const Continent = () => {
  const { name } = useParams<{ name: string }>() // Extract 'name' parameter from the URL

  // Find the continent object that matches the 'name' parameter
  const continent = continentsData.find(
    (cont) => cont.name.toLowerCase() === name?.toLowerCase(),
  )

  // Get the list of countries or set to an empty array if not found
  const countries = continent ? continent.countries : []

  return (
    <div>
      <h1>Countries in {name}</h1>
      {/* Display the list of countries */}
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      ) : (
        <p>No countries available for this continent.</p>
      )}
    </div>
  )
}

export default Continent
