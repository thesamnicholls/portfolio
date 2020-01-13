import React, {Component, Fragment} from "react"
import Navigation from '../Navigation';
import Intro from '../Intro';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='o-main'>
          <Intro />
        </div>
      </Fragment>
    )
  }
}

export default App
