import FeatureBox from '@/components/FeatureBox'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=' bg-about-background bg-cover bg-no-repeat h-[1376px] pr-[102px] pl-[102px] pt-[154px]'>
      <div className="about flex items-center justify-between" style={{maxWidth: "1440px", margin: "0 auto"}}>
        <div className="details w-[56%]">
            <SectionHeading text={"About"} />
            <Heading text={"What is Armatura"} headingStyle={"text-header mt-6 mb-6"}/>
            <Paragraph text={"Armatura is the world’s leading provider of advanced multi-modal biometric hardware, software and platforms which are based on deep learning and artificial intelligence. Our touchless face, palm and fingerprint matching technology is used in numerous industries which rely on highly secure & accurate identity & access management (IAM)"}  paragraphStyle={"text-black mb-4"}/>
            <Paragraph text={"Armatura’s global headquarters is located in Atlanta, GA USA. R&D is located in the U.S. and India. All manufacturing takes place in our 30,000 sq ft Thailand factory.We welcome the chance to partner with you."} paragraphStyle={"text-black "}/>
        </div>
        <div className="about-image">
            <Image src={"/images/about-img.png"} alt='bg' width={485} height={484}/>
        </div>
      </div>
      <div className="feature flex mt-24 mb-0 ml-auto mr-auto" style={{maxWidth: "1440px"}}>
        <div className="feature-img w-1/2 mr-4">
          <div className="upper flex gap-4 mb-4">
            <FeatureBox src={"/images/face.svg"} headText={"Face Recognition"} description={"Seamless Security : Elevating Access Through Face Recognition"}/>
            <FeatureBox src={"/images/hand.svg"} headText={"Palm Recognition"} description={"Unlocking Possibilities : Seamless Access with Palm Recognition"}/>
          </div>
          <div className="below flex gap-4">
          <FeatureBox src={"/images/carbon_inspection.svg"} headText={"Visitor Inspection"} description={"Enhancing Access Control: Biometric Visitor Inspection Solutions"} />
          <FeatureBox src={"/images/carbon_inspection.svg"} headText={"Multi-modal Recognition"} description={"Enhancing Access Control: Biometric Visitor Inspection Solutions"}/>
          </div>
        </div>
        <div className="feature-details">
          <SectionHeading text={"Key Feature"} />
          <Heading text={"Why choose Armatura for biometric solution?"} headingStyle={"text-header mt-6 mb-6"}/>
          <Paragraph text={"Empowered by our proprietary technology and patents, Armatura pioneers biometric modules and readers that elevate safety and verification accuracy in both physical and logical security realms. Our seamlessly integratable tools and platforms cater to fast-matching, precise user verification across various devices and applications."}  paragraphStyle={"text-black mb-4"}/>
          <Paragraph text={"Committed to next-gen security, we ensure biometric data privacy and global compliance. With full adherence to U.S. federal laws, our solutions offer paramount identity and access management (IAM) to safeguard against threats and errors."}  paragraphStyle={"text-black "}/>
        </div>
      </div>
    </div>
  )
}

export default About