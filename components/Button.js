import React from 'react'

const Button = ({text}) => {
  return (
    <button className='text-white rounded-xl flex justify-center items-center font-poppins text-xl font-semibold capitalize bg-primary hover:bg-hoverButton p-4'>
        {text}
    </button>
  )
}

export default Button