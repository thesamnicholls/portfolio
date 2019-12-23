import React, { Component } from "react"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className='l-container'>
        <div className='o-navigation'>
          <a className='o-navigation__logo' href='/'>
            <span className='o-navigation__name _bold'>SN</span>
          </a>
          <div className='o-navigation__burger'>
             <div 
              onClick={this.handleClick} 
              className={this.state.isToggleOn ? 'o-navigation__menu' : 'o-navigation__menu--active'}
            />
          </div>
          <ul className='o-navigation__list'>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/'>
                Work
              </a>
            </li>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/about'>
                About
              </a>
            </li>
            <li className='o-navigation__item'>
              <a className='o-navigation__link' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div 
            onClick={this.handleClick} 
            className={this.state.isToggleOn ? 'o-overlay' : 'o-overlay--active'}
        >
          <ul className='o-overlay__list'>
            <li className='o-overlay__item'>
              <a className='o-overlay__link' href='/'>
                Work
              </a>
            </li>
            <li className='o-overlay__item'>
              <a className='o-overlay__link' href='/about'>
                About
              </a>
            </li>
            <li className='o-overlay__item'>
              <a className='o-overlay__link' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;

