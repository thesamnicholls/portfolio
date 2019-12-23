import React, {Component, Fragment} from "react"
import Navigation from '../Navigation';
import Footer from '../Footer';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='o-main'>
          <div className='c-intro'>
            <h1 className='c-intro__text'>
              404: You must be lost, this page can't be found. Try clicking one of the navgation links above to keep exploring
            </h1>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default NotFound
