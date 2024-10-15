import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Continent from './components/Continent.tsx'
import Country from './components/Country.tsx'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="continents/:name" element={<Continent />} />
      <Route path="country/:code" element={<Country />} />
      <Route path="/continent/:name/country/:code" element={<Country />} />
    </Route>,
  ),
)

export default router
