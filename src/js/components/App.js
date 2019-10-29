import React, {Component, Fragment} from "react"
import Navigation from './Navigation';
import Intro from './Intro';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Intro />
        <Footer />
      </Fragment>
    )
  }
}

export default App
