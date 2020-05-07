import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import Intro from '../components/Intro';
import Social from '../components/Social';

const App = () => {
  return (
    <div className='l-main'>
      <Navigation />
      <Intro />
      <Social />
      <Footer />
    </div>
  )
}

export default App
