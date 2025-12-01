// import React from 'react'
import { motion } from "motion/react";
import Gridcard from "./girdcard";
import { CircleSmall } from "lucide-react";


function Grid() {
  const griddata = [
    {
      id: "1",
      imgurl: "/grid/lab.png",
      title: "Lab Test",
      desp:
        "Accurate and fast laboratory testing with advanced diagnostic equipment, providing reliable reports for blood work, scans, and health screenings to support timely treatment",
      width: " w-[50%]",
    },
    {
      id: "2",
      imgurl: "/grid/childcare.png",
      title: "Maternity & Cild Care",
      desp: `Comprehensive maternity and child care with expert doctors,
                  safe deliveries, newborn monitoring, and continuous support
                  for mothers and babies throughout their journey.`,
      width: "w-[50%]",
    },
    {
      id: "3",
      imgurl: "/grid/emergency.png",
      title: "Emergency care",
      desp: `Emergency care with rapid response, advanced equipment,
                  skilled doctors, and immediate treatment for trauma, cardiac
                  issues, and urgent medical needs.`,
      width: "w-[33%]",
    },
    {
      id: "4",
      imgurl: "/grid/childcare.png",
      title: "24/7 Service",
      desp: ` Round-the-clock hospital services ensuring continuous medical
                  support, timely care, emergency assistance, and patient
                  guidance available anytime for all health needs.`,
      width: "w-[33%]",
    },
    {
      id: "5",
      imgurl: "/grid/tele.png",
      title: "Teleconsultation",
      desp: `Connect with experienced doctors through secure video
                  consultations, offering quick medical advice, follow-ups, and
                  convenient care from home anytime.`,
      width: "w-[33%]",
    },
  ];

  return (
    <section className="min-h-screen w-[98vw] mx-auto">
      <div id="container" className="h-full">
        <div id="text" className="flex flex-row w-[85%] mx-auto">
          <span className="flex flex-col gap-2.5">
            <span className="bg-gray-50 text-xl text-blue-500 px-4 py-2 rounded-3xl flex flex-row gap-2 w-fit items-center justify-center">
              <CircleSmall className="fill-blue-500 size-4 animate-pulse" />
              <p className="geist-normal text-sm ">Features</p>
            </span>
            <h1 className="geist-bold text-2xl mt-6">
              Your trusted hospital for comprehensive services,
              <br />
              diagnostics, and emergency care.
            </h1>
          </span>
          <span>
            <h1 className="geist-normal text-xs pt-25 pl-35 text-gray-500">
              Your health, our priority — always here with trusted care.
            </h1>
          </span>
        </div>

        {/* bento grid */}
        <motion.div 
        initial={{y:60, opacity:0.6}}
        // animate={{y:0, opacity:1}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8,delay:0.5}}
        
        id="bento" className="h-[80vh] w-[98vw] mx-auto pt-6 ">
          {/* child 2 bento grid */}
          <div
            id="2grid"
            className="flex flex-row gap-3 w-[85%] mx-auto py-3 h-[50%] "
          >
            {griddata.slice(0, 2).map((data) => {
              return (
                <Gridcard
                  id={data.id}
                  imgurl={data.imgurl}
                  title={data.title}
                  desp={data.desp}
                  width={data.width}
                />
              );
            })}
          </div>

          {/* child 3 bento grid */}
          <div
            id="3grid"
            className="flex flex-row gap-3 w-[85%] mx-auto py- 2 h-[50%]"
          >
          {griddata.slice(2).map((data) => {
              return (
                <Gridcard
                  id={data.id}
                  imgurl={data.imgurl}
                  title={data.title}
                  desp={data.desp}
                  width={data.width}
                />
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
}

export default Grid;
