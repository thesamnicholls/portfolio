import React, { Component } from "react"
import Navigation from './Navigation';
import Intro from './Intro';
import Footer from './Footer';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='container'>
          <Intro />
          <About />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
