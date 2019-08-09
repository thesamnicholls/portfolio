import React, { Component } from "react"
import Navigation from './Navigation';
import Intro from './Intro';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='container'>
          <Intro />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
