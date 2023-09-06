import Image from "next/image";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsDiscord,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footerDetails bg-footer-background bg-cover bg-no-repeat flex justify-between text-black pt-16 pb-16 pr-[191px] pl-[74px]">
        <div className="logo flex flex-col gap-12">
          <Image
            src={"/images/footerLogo.png"}
            alt="footer"
            width={291}
            height={84}
            className=" mix-blend-darken"
          />
          <div className="social-media flex justify-center gap-6 items-center">
            <BsFacebook className=" text-2xl text-logoBgColor hover:text-logoHoverColor" />
            <BsInstagram className=" text-2xl text-logoBgColor hover:text-logoHoverColor" />
            <BsLinkedin className=" text-2xl text-logoBgColor hover:text-logoHoverColor" />
            <BsDiscord className=" text-2xl text-logoBgColor hover:text-logoHoverColor" />
            <BsTwitter className=" text-2xl text-logoBgColor hover:text-logoHoverColor" />
          </div>
        </div>

        <div className="sitemap">
          <h6 className="font-inter">SITEMAP</h6>
          <ul className="mt-4 font-[15px]">
            <li>Home</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="connect">
          <h6 className="font-inter font-normal">CONNECT</h6>
          <ul className="mt-4 font-[15px]">
            <li>+1 (470) 816-1970</li>
            <li>
              190 Bluegrass Valley Pkwy,
              <br />
              Alpharetta, GA 30005
            </li>
            <li>
              <u>info@armatura.us</u>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerSign bg-footerBg h-[111px] p-4 flex items-center pl-24 font-poppins text-[#a2a6b6]">
        &#169;2022 - Armatura US
      </div>
    </>
  );
};

export default Footer;
