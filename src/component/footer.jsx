// import React from 'react'

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
    return (
       <section id="footer" className="w-full mx-auto bg-blue-100 mt-12">
        <div id="container" className="w-[95%] mx-auto">
       <div id="main" className="flex flex-row gap-x-35">
         <div id="about" className="flex flex-col gap-y-4 pt-6 text-justify">
            <h1 className="geist-bold text-3xl">About us</h1>
            <p className="geist-normal text-base text-gray-600">We are a trusted multi-specialty hospital dedicated to delivering advanced, compassionate, and affordable healthcare. Our team of expert doctors, modern facilities, and patient-first approach ensure reliable treatment, accurate diagnosis, and a smooth healing experience for every patient. Your health and safety are our top priority.</p>
         </div>
        <div id="navigate">
            <p>Home</p>
            <p>Specialities</p>
            <p>Contact us</p>
        </div>
        <div id="contact">
            <p>+91 8936984868</p>
            <p>support@mediconnect.com</p>
            <p>Raghunath Nagar, Thane(West)</p>

        </div>
        <div id="follow" className="flex flex-col">
           <span className="flex flex-row gap-x-2"><Instagram /><p>Instagram</p></span> 
            <span className="flex flex-row gap-x-2"><Facebook /><p>Facebook</p></span>
            <span className="flex flex-row gap-x-2"><Linkedin /><p>Linkedin</p></span>
           <span className="flex flex-row gap-x-2"> <Twitter /><p>Twitter</p></span>
        </div>
       </div>
        <div id="copyright">
            <p>@Copyright mediconnect.com All rights reserved 2025</p>
            <span>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
            </span>
        </div>
        </div>
       </section>
    )
}

export default Footer
