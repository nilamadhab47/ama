import React from 'react'
import SectionHeading from './SectionHeading'
import Heading from './Heading'
import Button from './Button'

const ContactForm = () => {
  return (
    <div className=' rounded-[12px] bg-white pt-[19px] pb-[22px] pr-[6rem] pl-[6rem] flex flex-col justify-center items-center gap-[10px] w-[737px] h-[485px] absolute top-[12%] left-[43%]' style={{boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.06)"}}>
        <SectionHeading text={"Contact Us"} />
        <Heading text={"Ready To get Started"} headingStyle={"text-black mb-4"}/>
        <form className=' w-full'>
            <div className="namegroup flex justify-center gap-4 mb-6">
                <div className="first flex flex-col w-1/2">
                    <label htmlFor='first name' className=' text-inputLabelColor font-inter text-[10px] font-semibold mb-1'>First Name</label>
                    <input type="text" className="rounded-[5px] pt-[7px] pb-[7px] pl-[11px] pr-[11px]" style={{border: "1px solid #e9ebed"}} placeholder="First Name" name="first name" />
                </div>
                <div className="last flex flex-col w-1/2">
                    <label htmlFor='last name' className=' text-inputLabelColor font-inter text-[10px] font-semibold mb-1'>Last Name</label>
                    <input type="text" className="rounded-[5px] pt-[7px] pb-[7px] pl-[11px] pr-[11px]" style={{border: "1px solid #e9ebed"}}  placeholder="Last Name" name="last name" />
                </div>
            </div>
            <div className="emailGroup flex flex-col mb-6">
                <label htmlFor='email' className=' text-inputLabelColor font-inter text-[10px] font-semibold mb-1'>Your Email Address</label>
                <input type="text" className=" w-full rounded-[5px] pt-[7px] pb-[7px] pl-[11px] pr-[11px]" style={{border: "1px solid #e9ebed"}}  placeholder="Email" name="email" />
            </div>
            <div className="messageGroup flex flex-col">
                <label htmlFor="message" className=' text-inputLabelColor font-inter text-[10px] font-semibold mb-1'>Your message</label>
                <textarea name="message" id="message" cols="10" rows="3" placeholder='Text Area' className=' w-full rounded-[5px] pl-2 pt-2' style={{border: "1px solid #e9ebed"}} />
            </div>
        </form>
        <div className="buttonGroup float-left w-full mt-8">
            <Button text={"Contact Us"} buttonStyles={"rounded-[33px] text-sm pt-[8px] pb-[8px] pl-[37px] pr-[37px]"} />

        </div>
    </div>
  )
}

export default ContactForm