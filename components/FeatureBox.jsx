import Image from 'next/image'
import React from 'react'

const FeatureBox = ({src , headText, description}) => {
  return (
    <div className=' rounded-2xl bg-white w-[306px] h-[212px] pl-6 flex flex-col justify-center gap-3 pr-4 hover:bg-hoverBox'>
        <Image src={src} alt='img' width={48} height={48} className='float-left'/>
        <h3 className=' text-boxColor font-inter text-lg font-semibold'>{headText}</h3>
        <p className=' text-boxDescription font-inter text-xs font-medium'>{description}</p>
    </div>
  )
}

export default FeatureBox