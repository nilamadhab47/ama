import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full pt-[30px] pr-[180px] pb-[30px] pl-[98px]"
      style={{
        background: "rgba(0, 0, 0, 0.01)",
        backdropFilter: "blur(22px)",
      }}
    >
      <nav className="flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="logo" width={204} height={58} />
        </div>
        <div className="sub-nav">
          <ul className="flex justify-center items-center gap-8 font-inter text-xl font-semibold capitalize">
            <li>Home</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
