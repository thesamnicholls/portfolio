import React, { useState } from 'react'
import Navigation from '../components/Navigation'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main
      className={'l-main ' + (darkMode ? 'l-main--default' : 'l-main--light')}
    >
      <div className='l-wrapper'>
        <div className='l-container'>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </main>
  )
}

export default App
