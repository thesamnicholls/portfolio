import React from 'react'

type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className='c-heading'>
      <h2 className='c-heading__text'>{title}</h2>
    </div>
  )
}

export default Heading
