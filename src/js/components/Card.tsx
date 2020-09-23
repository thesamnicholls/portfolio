import React from 'react'

type CardProps = {
  image: string
  title: string
  description: string
  gitHub: string
  demo: string
}

const Card = ({ image, title, description, gitHub, demo }: CardProps) => {
  return (
    <div className='c-card'>
      <img
        src={image}
        alt='project screenshot'
        width='600'
        height='400'
        className='c-card__img'
      />
      <div className='c-card__body'>
        <p className='c-card__title'>{title}</p>
        <p className='c-card__description'>{description}</p>
        <div className='c-card__links'>
          <a href={gitHub} className='c-card__link'>
            View Code
          </a>
          <a href={demo} className='c-card__link'>
            View Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
