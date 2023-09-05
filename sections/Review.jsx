import { LogoList } from "@/Utils/LogoList";
import Heading from "@/components/Heading";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className=" bg-review-background bg-cover bg-no-repeat pt-[84px] pr-[102px] pb-[84px] pl-[102px] text-center">
      <div className="testimonials mb-[200px]">
        <Heading text={"Customer Testimonials"} headingStyle={"text-black mb-8"} />
        <p className=" text-reviewColor font-inter text-xl mb-12 pr-[300px] pl-[300px]">
          Armatura's biometric solutions have revolutionized our security
          systems. Their advanced hardware and software seamlessly integrate,
          providing an unparalleled level of accuracy and convenience. Our
          facility is now safer and more efficient thanks to Armatura's
          cutting-edge technology.
        </p>
        <div className="customer">
          <div className="customer-img ">
            <Image src={"/images/customer.jpg"} width={66} height={66} className=" rounded-full mt-0 mb-0 mr-auto ml-auto"/>
          </div>
          <div className="customer-info">
            <h3 className="text-reviewColor font-inter text-xl">Debiyan Deb</h3>
            <p className="text-greyColor font-inter text-sm">CEO, Armatura</p>
          </div>
        </div>
      </div>
      <div className="partmers">
        <SectionHeading text={"Our Partners"} />
        <Heading text={"People who trusted us with our work"} headingStyle={"text-black mt-4 mb-4"} />
        <p className=" text-reviewColor font-inter text-xl mb-4">
        Here’s a look at the organisations that have built thriving workforces<br/> through our way of operations!
        </p>
      </div>
      <div className="logoContainer flex justify-center items-center gap-6">
        {LogoList.map((log, indexedDB) =>(
            <Image key={indexedDB} src={log.src}  alt="loho" width={115} height={115}/>
        ))}
      </div>
    </div>
  );
};

export default Review;
