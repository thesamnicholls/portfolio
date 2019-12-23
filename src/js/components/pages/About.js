import React, {Component, Fragment} from "react"
import Navigation from '../Navigation';
import Footer from '../Footer';
import Description from '../Description';

class About extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='o-main'>
          <Description />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default About;