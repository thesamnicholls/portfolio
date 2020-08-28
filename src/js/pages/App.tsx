import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main
      className={'l-main ' + (darkMode ? 'l-main--default' : 'l-main--light')}
    >
      <div className='l-wrapper'>
        <div className='l-container'>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <Intro />
          <div className='l-container--small'>
            <h2>Blog</h2>
            <div className='l-grid'>
              <div className='c-card'></div>
              <div className='c-card'></div>
              <div className='c-card'></div>
              <div className='c-card'></div>
              <div className='c-card'></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
