import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-hero-background bg-cover bg-no-repeat h-screen">
        <Navbar />
        <div className="hero pl-[116px] pt-12">
          <div
            className="w-[177px] h-[294px] absolute"
            style={{
              borderStyle: "solid",
              borderWidth: "4px",
              borderImage: "linear-gradient(to right, #F04F23, #F04F2300) 1",
            }}
          ></div>
          <div className="details mt-8 ml-14">
            <h1 className="text-white font-inter text-7xl font-semibold mb-8 leading-[80px]">
              Armatura
              <br />
              <span className=" text-secondary">
                Biometric
                <br />
                Solutions
              </span>
            </h1>
            <p className=" font-inter text-3xl font-medium mb-8">
              Empowering Secure Identity & Access
              <br /> Management Through Advanced
              <br />
              Biometric Solutions
            </p>
            <Button text={"Contact Us"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
