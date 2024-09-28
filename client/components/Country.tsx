import { useParams, Link } from 'react-router-dom'
import countriesData from '../../data/countries.ts'

const Country = () => {
  // Extract both 'name' and 'code' parameters from the URL
  const { name, code } = useParams<{ name: string; code: string }>()

  // Find the country object in the data array based on the code
  const country = countriesData.find((country) => country.code === code)

  // If country is not found, return a message or a placeholder
  if (!country) {
    return <p>Country not found!</p>
  }

  // Split the neighbors' string into an array and find the corresponding country names
  const neighbourCountries = country.neighbours
    ? country.neighbours.split(',').map((neighbourCode) => {
        // Find the neighbor country object by its code
        return countriesData.find((c) => c.code === neighbourCode)
      })
    : []

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.areaSqKms} sq km</p>
      <p>Population: {country.population}</p>
      <p>
        Currency: {country.currencyName} ({country.currencyCode})
      </p>
      <p>Flag: {country.flag}</p>

      {/* Render the list of neighbors with their names and links */}
      <h2>Neighbouring Countries:</h2>
      {neighbourCountries.length > 0 ? (
        <ul>
          {neighbourCountries.map((neighbour) =>
            neighbour ? (
              <li key={neighbour.code}>
                {/* Link to the neighbouring country within the same continent */}
                <Link to={`/continent/${name}/country/${neighbour.code}`}>
                  {neighbour.name}
                </Link>
              </li>
            ) : (
              <li key={`unknown-${neighbour}`}>Unknown Neighbor</li>
            ),
          )}
        </ul>
      ) : (
        <p>This country has no neighbouring countries.</p>
      )}
    </div>
  )
}

export default Country
