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
        </div>
      </div>
    )
  }
}

export default Navigation;

