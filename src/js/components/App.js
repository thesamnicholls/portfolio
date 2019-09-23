import React, {Component, Fragment} from "react"
import Navigation from './Navigation';
import Intro from './Intro';
import Footer from './Footer';
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='l-container'>
          <Intro />
          <Contact />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default App
