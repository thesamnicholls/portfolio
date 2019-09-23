import React, {Component, Fragment} from "react"
import Navigation from './Navigation';
import Intro from './Intro';
import Footer from './Footer';
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='container'>
          <Intro />
          <Contact />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
