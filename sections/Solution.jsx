import { ImagesList } from '@/Utils/ImagesList'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'


const Solution = () => {
  return (
    <div className=' bg-solution-background bg-cover bg-no-repeat pt-[94px] text-center'>
      <SectionHeading text={"Our Solutions"}/>
      <Heading text={"Where Innovation Meets Security"} headingStyle={"text-white"}/>
      <Paragraph text={"Discover our array of solutions at Armatura, where innovation and security converge. Our expertise spans. We're dedicated to bolstering your organization's safety and productivity through advanced biometric solutions."} paragraphStyle={"text-white pr-[300px] pl-[300px] pt-3"}/>

      <div className="caraosel-images flex justify-evenly mt-16 pb-16">
          {ImagesList.map((image, indexedDB) =>(
            <Image key={indexedDB} src={image.src} alt='imges' width={320} height={380} />
          ))}
      </div>

    </div>
  )
}

export default Solution