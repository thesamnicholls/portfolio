import React from 'react';

const Social = () => {
  return (
    <div className='l-container'>
      <div className='c-social'>
        <ul className='c-social__list'>
          <li className='c-social__list-item'>
            <a 
              href='https://twitter.com/SamuelNicholls_' 
              className='c-social__link'>
              Twitter
            </a>
          </li>
          <li className='c-social__list-item'>
            <a 
              href='https://uk.linkedin.com/in/samuel-nicholls-576253133' 
              className='c-social__link'>
              Linkedin
            </a>
          </li>
          <li className='c-social__list-item'>
            <a 
              href='https://github.com/thesamnicholls'
              className='c-social__link'>
              GitHub
            </a>
          </li>
          <li className='c-social__list-item'>
            <a 
              href='https://codepen.io/thesamnicholls' 
              className='c-social__link'>
              CodePen
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Social;