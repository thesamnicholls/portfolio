import React, {Component, Fragment} from "react"
import Navigation from '../Navigation';
import Intro from '../Intro';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className='o-main'>
          <Intro />
          <div className='l-container'>
            <div className='l-container--card'>
              <div className='c-card'>
                <div className='c-card__image'>
                  <p className='c-card__title'>Project One</p>
                </div>
              </div>
              <div className='c-card'>
                <div className='c-card__image'>
                  <p className='c-card__title'>Project Two</p>
                </div>
              </div>
            </div>
            <div className='l-container--card'>
              <div className='c-card'>
                <div className='c-card__image'>
                  <p className='c-card__title'>Projet Three</p>
                </div>
              </div>
              <div className='c-card'>
                <div className='c-card__image'>
                  <p className='c-card__title'>Project Four</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default App
