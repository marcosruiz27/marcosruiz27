import continentsData from '../../data/continents'

function Nav() {
  const continentsNames = Object.keys(continentsData)

  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>Build your continent list here</li>
        {continentsNames.map((continent) => (
          <li key={continent}>{continent}</li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
