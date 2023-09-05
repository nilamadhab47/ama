import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footerDetails bg-footer-background bg-cover bg-no-repeat flex justify-evenly text-black pt-8 pb-8">
        <div className="logo">
          <Image
            src={"/images/footerLogo.png"}
            alt="footer"
            width={291}
            height={84}
          />
        </div>
        <div className="social-media"></div>
        <div className="sitemap">
          <h6>SITEMAP</h6>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="connect">
          <h6>CONNECT</h6>
          <ul>
            <li>+1 (470) 816-1970</li>
            <li>
              190 Bluegrass Valley Pkwy,
              <br />
              Alpharetta, GA 30005
            </li>
            <li>info@armatura.us</li>
          </ul>
        </div>
      </div>
      <div className="footerSign bg-footerBg h-[111px] p-4">
        &#169;2022 - Armatura US
      </div>
    </div>
  );
};

export default Footer;
