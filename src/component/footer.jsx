// import React from 'react'

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
    return (
       <section id="footer" className="w-full mx-auto bg-blue-100 mt-12">
        <div id="container" className="w-[95%] mx-auto pt-8 p-8">
       <div id="main" className="flex flex-row gap-x-25 text-start">
         <div id="about" className="flex flex-col gap-y-4 text-justify">
            <h1 className="geist-bold text-3xl">About us</h1>
            <p className=" text-base text-gray-800">We are a trusted multi-specialty hospital dedicated to delivering advanced, compassionate, and affordable healthcare. Our team of expert doctors, modern facilities, and patient-first approach ensure reliable treatment, accurate diagnosis, and a smooth healing experience for every patient. Your health and safety are our top priority.</p>
         </div>
        <div id="navigate" className="flex flex-col gap-y-3">
            <h1 className="geist-bold text-xl ">Navigate</h1>
            <p className="text-gray-900">Home</p>
            <p className="text-gray-900">Specialities</p>
            <p className="text-gray-900">Contact us</p>
        </div>
        <div id="contact" className="flex flex-col gap-y-3">
            <h1 className="geist-bold text-xl">Contact</h1>
            <p className="text-gray-900">+91 8936984868</p>
            <p className="text-gray-900">support@mediconnect.com</p>
            <p className="text-gray-900">Raghunath Nagar, Thane(West)</p>

        </div>
        <div id="follow" className="flex flex-col gap-y-3">
            <h1 className="geist-bold text-xl">Follow us</h1>
           <span className="flex flex-row gap-x-2 text-gray-900"><Instagram /><p>Instagram</p></span> 
            <span className="flex flex-row gap-x-2 text-gray-900"><Facebook /><p>Facebook</p></span>
            <span className="flex flex-row gap-x-2 text-gray-900"><Linkedin /><p>Linkedin</p></span>
           <span className="flex flex-row gap-x-2 text-gray-900"> <Twitter /><p>Twitter</p></span>
        </div>
       </div>
        <div id="copyright" className="flex flex-row gap-x-4 justify-between pt-8 p-0">
            <p className="pl-4">@Copyright <span className="text-blue-500 ">mediconnect.com</span> All rights reserved 2025</p>
            <span className="flex flex-row gap-x-6 text-base text-gray-900">
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
            </span>
        </div>
        </div>
       </section>
    )
}

export default Footer
