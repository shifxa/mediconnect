// import React from 'react'
import { Calendar, ClipboardCheck } from "lucide-react";
import Herocards from "./herocards";

function Hero() {
  const cardsData = [
    {
      id: 0,
      icon: <Calendar />,
      title: "Doctor Schedule",
      desp: "Find the right doctor, check schedules, and book appointments effortlessly.",
    },
    
    {
      id: 0,
      icon: <ClipboardCheck />,
      title: "Easy Appointment",
      desp: "Book your appointment easily and get expert medical care on time.",
    },
    
    {
      id: 0,
      icon: <Calendar />,
      title: "Multispecialist",
      desp: "Access diverse medical professionals in one place.",
    },

  ];

  return (
    <section className="bg-blue-100 w-[98vw] h-screen relative overflow-x-hidden">
      <div
        id="container"
        className="flex flex-col w-full h-full justify-between "
      >
        <img
          src="/hero image.png"
          alt=""
          className="object-contain w-[800px] absolute bottom-0 left-[20%] z-0"
        />

        <div
          id="title"
          className=" flex flex-col mx-auto text-center mt-35 gap-2"
        >
          <h1 className="text-4xl geist-bold">
            Seamless Hospital Booking <br />
            For Your Health Needs{" "}
          </h1>
          <p className="geist-normal">
            Book appointment easily with trusted Doctor's <br />
            Get fast access to medical services and expert care
          </p>
        </div>

        <div
          id="cards"
          className="mx-auto z-10 w-[60%] max-w-6xl flex flex-row justify-around items-center"
        >
          {
            cardsData.map((data,index)=>{
              return(
                <Herocards desp={data.desp}  icon={data.icon} id={data.id} title={data.title}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Hero;
