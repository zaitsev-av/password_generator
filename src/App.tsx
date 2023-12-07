import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/layout'

const routes = createBrowserRouter([
  {
    children: [],
    element: <Layout />,
    errorElement: <div>Error</div>,
    path: '/',
  },
])

export function App() {
  return <RouterProvider router={routes} />
}
