import React from 'react'

const Paragraph = ({text,paragraphStyle}) => {
  return (
    <p className={`font-inter text-lg ${paragraphStyle}`}>
        {text}
    </p>
  )
}

export default Paragraph