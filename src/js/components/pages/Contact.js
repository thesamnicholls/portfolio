import React, {Component, Fragment} from "react"
import Navigation from '../Navigation';
import Footer from '../Footer';
import Information from '../Information';

class About extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='o-main'>
          <Information />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default About;