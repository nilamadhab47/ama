import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const testimonialData = [
    {
        text: (
          <>
            Armatura's biometric solutions have revolutionized our security systems. Their advanced hardware and software{' '}
            <span className="font-semibold">seamlessly integrate,</span> providing an{' '}
            <span className="font-semibold">unparalleled level of accuracy and convenience.</span>{' '}
            Our facility is now safer and more efficient thanks to{' '}
            <span className="font-semibold">Armatura's cutting-edge technology.</span>
          </>
        ),
        customer: {
          name: 'Debeyan Deb',
          position: 'Chief Executive Officer, Lenscorp',
          image: '/images/customer.jpg',
        },
      },
      {
        text: (
          <>
            Armatura's biometric solutions have revolutionized our security systems. Their advanced hardware and software{' '}
            <span className="font-semibold">seamlessly integrate,</span> providing an{' '}
            <span className="font-semibold">unparalleled level of accuracy and convenience.</span>{' '}
            Our facility is now safer and more efficient thanks to{' '}
            <span className="font-semibold">Armatura's cutting-edge technology.</span>
          </>
        ),
        customer: {
          name: 'Debeyan Deb',
          position: 'Chief Executive Officer, Lenscorp',
          image: '/images/customer.jpg',
        },
      },
      {
        text: (
          <>
            Armatura's biometric solutions have revolutionized our security systems. Their advanced hardware and software{' '}
            <span className="font-semibold">seamlessly integrate,</span> providing an{' '}
            <span className="font-semibold">unparalleled level of accuracy and convenience.</span>{' '}
            Our facility is now safer and more efficient thanks to{' '}
            <span className="font-semibold">Armatura's cutting-edge technology.</span>
          </>
        ),
        customer: {
          name: 'Debeyan Deb',
          position: 'Chief Executive Officer, Lenscorp',
          image: '/images/customer.jpg',
        },
      },
  // Add more testimonials as needed
];

function TestimonialSlider() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
    // Function to go to the next testimonial
    const nextTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    };
  
    useEffect(() => {
      // Set an interval to switch to the next testimonial every 5 seconds (adjust as needed)
      const interval = setInterval(nextTestimonial, 3000); // 5000 milliseconds = 5 seconds
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
  
    const handleThumbClick = (index) => {
      setCurrentTestimonialIndex(index);
    };
  
    return (
      <div className="relative">
        <div className="testimonial-container">
          <div className="testimonial-content">
            <p className="text-reviewColor font-inter text-xl mb-12 pr-[250px] pl-[250px] relative" style={{lineHeight: "37.5px"}}>
            <Image
              src={"/images/quote.png"}
              alt="quote"
              width={48}
              height={33}
              className=" absolute left-[16%]"
            />{" "}{testimonialData[currentTestimonialIndex].text}
            <Image
              src={"/images/quote.png"}
              alt="quote"
              width={48}
              height={33}
              className=" absolute bottom-0 right-[19%] top-[80%] rotate-180"
            />
            </p>
  
            <div className="customer">
              <div className="customer-img">
                <img
                  src={testimonialData[currentTestimonialIndex].customer.image}
                  width={66}
                  height={66}
                  className="rounded-full mt-0 mb-0 mr-auto ml-auto h-[66px] w-[66px]"
                  alt={`Customer: ${testimonialData[currentTestimonialIndex].customer.name}`}
                />
              </div>
              <div className="customer-info">
                <h3 className="text-reviewColor font-inter text-xl mt-4">
                  {testimonialData[currentTestimonialIndex].customer.name}
                </h3>
                <p className="text-greyColor font-inter text-sm mb-8">
                  {testimonialData[currentTestimonialIndex].customer.position}
                </p>
              </div>
            </div>
          </div>
          <div className="testimonial-thumbs flex ">
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className={`thumb w-[10px] h-[10px] rounded ${index === currentTestimonialIndex ? 'bg-[#136AD5]' : 'bg-[#404F65]'}`}
                onClick={() => handleThumbClick(index)}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default TestimonialSlider;
