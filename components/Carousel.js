import Image from "next/image";
import { useState } from "react";

const Carousel = ({ ImagesList }) => {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;

  const prevImages = () => {
    const newIndex = Math.max(0, startIndex - itemsPerPage);
    setStartIndex(newIndex);
  };

  const nextImages = () => {
    const newIndex = Math.min(startIndex + itemsPerPage, ImagesList.length - 1);
    setStartIndex(newIndex);
  };
  const handleThumbnailClick = (index) => {
    setStartIndex(index);
  };

  const visibleImages = ImagesList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="carousel-images flex justify-evenly mt-16 pb-16 transition-transform">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[380px] group overflow-hidden transform-gpu transition-transform duration-500 opacity-100 translate-x-0"
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
      </div>
      <div className="dots mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(ImagesList.length / itemsPerPage) }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 mx-2 rounded-full bg-white cursor-pointer transition-all ${
              i === Math.floor(startIndex / itemsPerPage) ? 'bg-white transform-gpu scale-150' : 'bg-gray-500'
            }`}
            onClick={() => handleThumbnailClick(i * itemsPerPage)}
          ></div>
        ))}
      </div>

      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00558B] text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 ml-12 ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={prevImages}
        disabled={startIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g opacity="0.7">
            <path
              d="M19.6136 8.94669C19.4902 8.82308 19.3437 8.72502 19.1824 8.65811C19.0211 8.5912 18.8482 8.55676 18.6736 8.55676C18.4989 8.55676 18.326 8.5912 18.1647 8.65811C18.0034 8.72502 17.8569 8.82308 17.7336 8.94669L11.6136 15.0667C11.49 15.19 11.3919 15.3366 11.325 15.4979C11.2581 15.6592 11.2236 15.8321 11.2236 16.0067C11.2236 16.1813 11.2581 16.3542 11.325 16.5155C11.3919 16.6768 11.49 16.8233 11.6136 16.9467L17.7336 23.0667C17.857 23.1901 18.0035 23.288 18.1648 23.3549C18.3261 23.4217 18.499 23.456 18.6736 23.456C18.8481 23.456 19.021 23.4217 19.1823 23.3549C19.3436 23.288 19.4901 23.1901 19.6136 23.0667C19.737 22.9432 19.8349 22.7967 19.9017 22.6354C19.9685 22.4741 20.0029 22.3013 20.0029 22.1267C20.0029 21.9521 19.9685 21.7792 19.9017 21.618C19.8349 21.4567 19.737 21.3101 19.6136 21.1867L14.4402 16L19.6136 10.8267C20.1336 10.3067 20.1202 9.45335 19.6136 8.94669Z"
              fill="#858585"
            />
          </g>
        </svg>
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00558B] text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 mr-12 ${
          startIndex + itemsPerPage >= ImagesList.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={nextImages}
        disabled={startIndex + itemsPerPage >= ImagesList.length}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M12.3874 8.94669C12.5108 8.82308 12.6573 8.72502 12.8186 8.65811C12.9799 8.5912 13.1528 8.55676 13.3274 8.55676C13.502 8.55676 13.675 8.5912 13.8363 8.65811C13.9975 8.72502 14.1441 8.82308 14.2674 8.94669L20.3874 15.0667C20.511 15.19 20.6091 15.3366 20.676 15.4979C20.7429 15.6592 20.7773 15.8321 20.7773 16.0067C20.7773 16.1813 20.7429 16.3542 20.676 16.5155C20.6091 16.6768 20.511 16.8233 20.3874 16.9467L14.2674 23.0667C14.144 23.1901 13.9974 23.288 13.8361 23.3549C13.6749 23.4217 13.502 23.456 13.3274 23.456C13.1528 23.456 12.98 23.4217 12.8187 23.3549C12.6574 23.288 12.5109 23.1901 12.3874 23.0667C12.264 22.9432 12.1661 22.7967 12.0992 22.6354C12.0324 22.4741 11.9981 22.3013 11.9981 22.1267C11.9981 21.9521 12.0324 21.7792 12.0992 21.618C12.1661 21.4567 12.264 21.3101 12.3874 21.1867L17.5608 16L12.3874 10.8267C11.8674 10.3067 11.8808 9.45335 12.3874 8.94669Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
