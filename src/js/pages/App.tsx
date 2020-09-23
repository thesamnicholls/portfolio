import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'
import Heading from '../components/Heading'
import Card from '../components/Card'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main
      className={
        'l-main ' +
        (darkMode ? 'l-main--default' : 'l-main--light') +
        (openMenu ? ' l-main--menu-open' : '')
      }
    >
      <div className='l-wrapper'>
        <div className='l-container'>
          <Navigation
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Intro />
          <Heading title='Projects' />
          <div className='l-grid'>
            <Card
              image='https://via.placeholder.com/600x400'
              title='Project Management Tool'
              description=' This is a project management tool which allows the user to create a
              project and view other users created projects. The techologies used
              for this project are; Firebase, Redux, React and TypeScript.'
              gitHub='https://google.co.uk/'
              demo='https://google.co.uk/'
            />
            <Card
              image='https://via.placeholder.com/600x400'
              title='Fake Store'
              description='This is a fake store which allows the user to browse different 
              fake products and filter the products to their needs. The techologies used for this project
              are; React and TypeScript.'
              gitHub='https://google.co.uk/'
              demo='https://google.co.uk/'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
