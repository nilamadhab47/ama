import { LogoList } from "@/Utils/LogoList";
import Heading from "@/components/Heading";
import LogoScroll from "@/components/LogoScroll";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Review = () => {
  return (
    <div className=" bg-review-background bg-cover bg-no-repeat pt-[84px] pr-[102px] pb-[84px] pl-[102px] text-center">
      <div className="testimonials mb-[100px]">
        <Heading
          text={"Customer Testimonials"}
          headingStyle={"text-black mb-8"}
        />
          {/* <p className=" text-reviewColor font-inter text-xl mb-12 pr-[250px] pl-[250px] relative">
            <Image
              src={"/images/quote.png"}
              alt="quote"
              width={48}
              height={33}
              className=" absolute left-[17%]"
            />{" "}
            Armatura's biometric solutions have revolutionized our security
            systems. Their advanced hardware and software{" "}
            <span className=" font-semibold">seamlessly integrate,</span>
            providing an{" "}
            <span className=" font-semibold">
              unparalleled level of accuracy and convenience.
            </span>{" "}
            Our facility is now safer and more efficient thanks to{" "}
            <span className=" font-semibold">
              Armatura's cutting-edge technology.
            </span>
            <Image
              src={"/images/quote.png"}
              alt="quote"
              width={48}
              height={33}
              className=" absolute bottom-0 right-[20%] top-[80%] rotate-180"
            />
          </p> */}
          <TestimonialSlider />
          
  

       ÷
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
              style={{ width: "25%", height: "25%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
