import React, { Component } from "react"

class About extends Component {
  render() {
    return (
        <div className='about'>
          <h1>About</h1>
          <img src={require('../avatar.jpg')} alt='example alt'/>
          <p>Dolorum porta tellus porttitor, mi porro ipsum numquam. Iure necessitatibus, omnis rem, taciti, facilisi dignissim, viverra! Ratione pulvinar! Dui maiores porta? Diam torquent repellat. Nesciunt optio? Primis. Potenti, conubia volutpat, quibusdam iusto integer architecto, exercitationem hic officia ut. Molestiae molestiae? Porttitor. Suspendisse, eaque quod rutrum egestas voluptate officiis adipiscing metus.</p>
        </div>
    )
  }
}

export default About;