import React from 'react'

const Heading = ({text, headingStyle}) => {
  return (
    <h1 className={`font-inter text-4xl font-bold ${headingStyle}`}>
        {text}
    </h1>
  )
}

export default Heading