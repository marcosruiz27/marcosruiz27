import App from './components/App.tsx'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />),
)

export default router
