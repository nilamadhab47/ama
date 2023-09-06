import { LogoList } from "@/Utils/LogoList";
import Heading from "@/components/Heading";
import LogoScroll from "@/components/LogoScroll";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Review = () => {
  return (
    <div className=" bg-review-background bg-cover bg-no-repeat pt-[84px] pr-[102px] pb-[84px] pl-[102px] text-center">
      <div className="testimonials mb-[100px]">
        <Heading
          text={"Customer Testimonials"}
          headingStyle={"text-black mb-8"}
        />
        <p className=" text-reviewColor font-inter text-xl mb-12 pr-[300px] pl-[300px] relative">
          <Image src={"/images/quote.png"} alt="quote" width={48} height={33} className=" absolute left-[20%]"/> Armatura's biometric solutions have revolutionized our security
          systems. Their advanced hardware and software seamlessly integrate,
          providing an unparalleled level of accuracy and convenience. Our
          facility is now safer and more efficient thanks to Armatura's
          cutting-edge technology.<Image src={"/images/quote.png"} alt="quote" width={48} height={33} className=" absolute bottom-0 right-[30%] top-[80%] rotate-180"/>
        </p>
        <div className="customer">
          <div className="customer-img ">
            <Image
              src={"/images/customer.jpg"}
              width={66}
              height={66}
              className=" rounded-full mt-0 mb-0 mr-auto ml-auto h-[66px] w-[66px]"
            />
          </div>
          <div className="customer-info">
            <h3 className="text-reviewColor font-inter text-xl mt-4">Debiyan Deb</h3>
            <p className="text-greyColor font-inter text-sm">Chief Executive Officer, Lenscorp</p>
          </div>
        </div>
      </div>
      <div className="partmers">
        <SectionHeading text={"Our Partners"} />
        <Heading
          text={"People who trusted us with our work"}
          headingStyle={"text-black mt-4 mb-4"}
        />
        <p className=" text-reviewColor font-inter text-xl mb-4">
          Here’s a look at the organisations that have built thriving workforces
          <br /> through our way of operations!
        </p>
      </div>
      <div className="parentContainer w-full h-40  overflow-hidden">
        <div className="logoContainer flex h-40 justify-center items-center gap-6 animate-marquee-bounce-reverse">
          {LogoList.map((log, indexedDB) => (
            <Image
              key={indexedDB}
              src={log.src}
              alt="logo"
              width={115}
              height={115}
             style={{width: '25%', height: '25%'}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
