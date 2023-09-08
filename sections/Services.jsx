import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-service-background bg-cover bg-no-repeat'>
  <div className='flex pt-20 pb-20 pr-[101px] pl-[101px] justify-between items-center' style={{maxWidth: "1440px", margin: "0 auto"}}>
        <div className="details w-1/2">
            <SectionHeading text={"Industries"} />
            <Heading text={"Industries we Serve"} headingStyle={"text-white mt-8 mb-8"}/>
            <Paragraph text={"Armatura, a leading biometric services provider in both software and hardware solutions, extends its expertise to cater to diverse industries including Healthcare, Banking, Workforce Management, and Multi-tenant Housing. "} paragraphStyle={"mb-8"}/>
            <Paragraph text={"In Healthcare, our advanced biometric technology ensures accurate patient identification and secure access to sensitive records. For Banking, we enhance security through cutting-edge authentication methods. In Workforce Management, our solutions streamline attendance tracking, and in Multi-tenant Housing, we bolster access control for safe and efficient living. Armatura is your trusted partner, driving efficiency and security across industries."}/>
        </div>
        <div className="servies-images">
            <Image src={"/images/servicesImg.png"} alt='imges'  width={478} height={611}/>
        </div>
    </div>
    </div>
  
  )
}

export default Services