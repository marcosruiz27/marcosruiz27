import { useParams } from 'react-router-dom'

import continentsData from '../../data/continents.ts'

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
        <img
          src={`/public/images/${continent.image}`}
          alt={`Image of ${name}`}
        />
      )}
      {/* Display the list of countries */}
      {countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.code}>{country.name}</li> // Use country.code as the key for better uniqueness
          ))}
        </ul>
      ) : (
        <p>No countries available for this continent.</p>
      )}
    </div>
  )
}

export default Continent
