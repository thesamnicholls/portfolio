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
        <Intro />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default App
