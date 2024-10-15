import Data from '../../data/continents'
import { Link } from 'react-router-dom'

function Nav() {
  const continentsNames = Object.keys(Data)

  return (
    <div>
      <nav>
        <h2>Nav</h2>
        <ul>
          {continentsNames.map((continent) => (
            <li key={continent}>
              <Link to={`/continents/${continent}`}>{continent}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
