import { createRoot } from 'react-dom/client'

import App from './components/App.tsx'

import router from '../client/router.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />,
  )
})
