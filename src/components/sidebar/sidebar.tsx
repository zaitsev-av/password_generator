import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BurgerIcon, CloseIcon, HomeIcon, LogoutIcon } from '@/assets/icons'
import { clsx } from 'clsx'

import s from './sidebar.module.scss'

const navItems = [
  { icon: <HomeIcon />, title: 'home' },
  { icon: <LogoutIcon />, title: 'logout' },
]

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const cn = {
    burger: clsx(s.burger),
    logo: clsx(s.logo),
    menu: clsx(s.menu),
    sb_button: clsx(s.button),
    sb_header: clsx(s.sidebar_header),
    sb_liner: clsx(s.sidebar_liner),
    sidebar: clsx(s.sidebar, isOpen ? s.open : ''),
  }
  const navigate = useNavigate()

  return (
    <aside className={cn.sidebar}>
      <div className={cn.sb_liner}>
        <header className={cn.sb_header}>
          <button className={cn.burger} onClick={() => setIsOpen(!isOpen)} type={'button'}>
            <span>{isOpen ? <CloseIcon /> : <BurgerIcon />}</span>
          </button>
          <span className={cn.logo}>Password Generate</span>
          {/*<img src="'''" alt="'''" className={cn.logo} />*/}
        </header>
        <nav className={cn.menu}>
          {navItems.map((item, index) => {
            const navigateTo = () => {
              navigate(`/${item.title}`)
            }

            return (
              <button className={cn.sb_button} key={index} onClick={navigateTo}>
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
