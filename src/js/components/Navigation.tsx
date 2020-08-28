import React, { useState } from 'react'

type NavigationProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = (event: any) => {
    event.preventDefault()
    setOpenMenu(!openMenu)
  }
  const toggleDarkMode = (event: any) => {
    event.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <nav className='o-navigation'>
      <a
        className='o-navigation__logo'
        href='/'
        title='Click here to go to the homepage'
      >
        <span className='o-navigation__name'>SN</span>
      </a>
      <button
        className={
          openMenu ? 'o-navigation__burger--active' : 'o-navigation__burger'
        }
        onClick={toggleOpenMenu}
        aria-label='Click here to open the menu'
        value='Open'
      >
        <span className='o-navigation__icon' />
      </button>

      <div
        className={
          openMenu ? 'o-navigation__wrapper--active' : 'o-navigation__wrapper'
        }
      >
        <ul className='o-navigation__menu'>
          <li className='o-navigation__list-item--margin'>
            <a
              className='o-navigation__link'
              href='/'
              title='Click here to go to the about page'
            >
              About
            </a>
          </li>
          <li className='o-navigation__list-item--margin'>
            <a
              className='o-navigation__link'
              href='/'
              title='Click here to go to the about page'
            >
              Blog
            </a>
          </li>
          <li className='o-navigation__list-item--margin'>
            <a
              className='o-navigation__link'
              href='/'
              title='Click here to go to the about page'
            >
              Contact
            </a>
          </li>
          <li className='o-navigation__list-item'>
            <button
              onClick={toggleDarkMode}
              className={darkMode ? 'c-switch--active' : 'c-switch'}
              aria-label='Click here to toggle dark mode'
            >
              <span className='c-switch__circle'></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
