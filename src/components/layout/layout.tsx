import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'

export const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  )
}
