import { ImagesList } from "@/Utils/ImagesList";
import Carousel from "@/components/Carousel";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className=" bg-solution-background bg-cover bg-no-repeat pt-[94px] text-center pb-16">
      <SectionHeading text={"Our Solutions"} />
      <Heading
        text={"Where Innovation Meets Security"}
        headingStyle={"text-white mt-[22.5px] mb-[22.5px] "}
      />
      <Paragraph
        text={
          "Discover our array of solutions at Armatura, where innovation and security converge. Our expertise spans. We're dedicated to bolstering your organization's safety and productivity through advanced biometric solutions."
        }
        paragraphStyle={"text-white pr-[300px] pl-[300px] pt-3 font-normal"}
      />
      {/* <div className="caraosel-images flex justify-evenly mt-16 pb-16">
        {ImagesList.map((image, indexedDB) => (
          <div
            key={indexedDB}
            className="relative w-[320px] h-[380px] group overflow-hidden transition-transform transform-gpu duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
            }}
          >
          <div className="transform-gpu transition-transform group-hover:translate-y-[24rem]">
              <Image src={image.src} alt="images" width={320} height={380} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#3C3F86D1] via-[#000000] bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 h-[190%] pt-[12px] pr-[32px] pl-[32px] ">
              <h3 className="font-inter text-2xl font-bold -translate-y-[12rem]">
                {image.heading}
              </h3>
              <p
                className="text-white text-left transform -translate-y-[10rem] transition-transform font-inter text-lg pl-4"
                style={{ borderLeft: "4px solid #F04F23" }}
              >
                {image.text}
              </p>
              <a
                href={image.link}
                target="_blank"
                rel="noreferrer"
                className="text-white font-inter text-lg pl-4 -translate-x-16 -translate-y-36"
              >
                Read More &#8594;
              </a>
            </div>
          </div>
        ))}
      </div> */}
      <Carousel ImagesList={ImagesList} />
    </div>
  );
};

export default Solution;
