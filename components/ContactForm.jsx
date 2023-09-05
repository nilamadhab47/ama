import React from 'react'
import SectionHeading from './SectionHeading'
import Heading from './Heading'

const ContactForm = () => {
  return (
    <div className=' rounded-[12px] bg-white pt-[19px] pb-[22px] flex flex-col justify-center items-center gap-[30px]'>
        <SectionHeading text={"Contact Us"} />
        <Heading text={"Ready To get Started"} />
        <form>
            <div className="namegroup">
                <div className="first">
                    <label htmlFor='first name'>First Name</label>
                    <input type="text" className="" placeholder="First Name" name="first name" />
                </div>
                <div className="last">
                    <label htmlFor='last name'>Last Name</label>
                    <input type="text" className="" placeholder="Last Name" name="last name" />
                </div>
            </div>
            <div className="emailGroup">
                <label htmlFor='email'>Your Email Address</label>
                <input type="text" className="" placeholder="Email" name="email" />
            </div>
            <div className="messageGroup">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Text Area'/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm