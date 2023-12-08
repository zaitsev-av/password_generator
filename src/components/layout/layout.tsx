import { FC } from 'react'
// import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'
import { Generator } from '@/pages/generator'

export const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Generator />
      </div>
    </>
  )
}
