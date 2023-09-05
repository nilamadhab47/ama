import React from 'react'

const Button = ({text, buttonStyles}) => {
  return (
    <button className={`text-white flex justify-center items-center font-poppins font-semibold capitalize bg-primary hover:bg-hoverButton ${buttonStyles}`}>
        {text}
    </button>
  )
}

export default Button