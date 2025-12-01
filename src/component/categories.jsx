// import React from 'react'

import { ChevronLeft, ChevronRight, CircleSmall } from "lucide-react";
import Categoriescard from "./categoriescard";

function Categories() {
  const doctorsData = [
    {
      id: 0,
      title: "Gynecologist",
      img: "/drimg/neuro.png",
      count: "30+ Doctor's",
      desp: "A gynecologist specializes in women’s reproductive health, pregnancy care, fertility issues, and overall wellness.",
      buttonText: "View all Specialist",
    },

    {
      id: 1,
      title: "Dermatologist",
      img: "/drimg/neuro.png",
      count: "25+ Doctor's",
      desp: "A dermatologist specializes in diagnosing and treating skin, hair, and nail diseases with expert care.",
      buttonText: "View all Specialist",
    },

    {
      id: 2,
      title: "Neurosurgeon",
      img: "/drimg/neuro.png",
      count: "33+ Doctor's",
      desp: "A neurosurgeon expertly treats brain, spine, and nerve disorders through advanced surgical and non-surgical care.",
      buttonText: "View all Specialist",
    },

    {
      id: 3,
      title: "ENT Specialist",
      img: "/drimg/neuro.png",
      count: "15+ Doctor's",
      desp: "An ENT specialist treats ear, nose, and throat conditions, ensuring better hearing, breathing, and overall comfort.",
      buttonText: "View all Specialist",
    },
    {
      id: 4,
      title: "Gastroenterologist",
      img: "/drimg/neuro.png",
      count: "20+ Doctor's",
      desp: "A gastroenterologist treats stomach, liver, and digestive system disorders, ensuring healthy digestion and long-term wellness.",
      buttonText: "View all Specialist",
    },
    {
      id: 5,
      title: "Psychiatrist",
      img: "/drimg/neuro.png",
      count: "10+ Doctor's",
      desp: "A psychiatrist treats mental health disorders, providing therapy, diagnosis, & emotional support for overall well-being.",
      buttonText: "View all Specialist",
    },
    {
      id: 6,
      title: "Orthopedic",
      img: "/drimg/neuro.png",
      count: "12+ Doctor's",
      desp: "An orthopedic doctor treats bone, joint, muscle, and spine issues, restoring mobility and relieving pain.",
      buttonText: "View all Specialist",
    },
    {
      id: 7,
      title: "Nephrologist",
      img: "/drimg/neuro.png",
      count: "35+ Doctor's",
      desp: "A nephrologist specializes in kidney diseases, managing kidney function, dialysis care, and long-term renal health.",
      buttonText: "View all Specialist",
    },
    {
      id: 8,
      title: "General Physician",
      img: "/drimg/neuro.png",
      count: "50+ Doctor's",
      desp: "Routine Check-ups,common illeness, and health management with a general practitioner",
      buttonText: "View all Specialist",
    },
    {
      id: 9,
      title: "Ophthalmologist",
      img: "/drimg/neuro.png",
      count: "12+ Doctor's",
      desp: "An ophthalmologist treats eye diseases, improves vision,  & provides complete medical & surgical eye care.",
      buttonText: "View all Specialist",
    },
    {
      id: 10,
      title: "Dentist",
      img: "/drimg/neuro.png",
      count: "9+ Doctor's",
      desp: "A dentist diagnoses and treats oral issues, improves dental health, and enhances overall smile care.",
      buttonText: "View all Specialist",
    },
    {
      id: 11,
      title: "Cardiologist",
      img: "/drimg/neuro.png",
      count: "9+ Doctor's",
      desp: "A dentist diagnoses and treats oral issues, improves dental health, and enhances overall smile care.",
      buttonText: "View all Specialist",
    },
  ];

  return (
    <section className="min-h-screen w-[98vw] p-8 ">
      <div id="container">
        <div id="text">
          <span className="bg-gray-50 text-xl text-blue-500 px-4 py-2 rounded-3xl flex flex-row gap-2 w-fit items-center justify-center">
            <CircleSmall className="fill-blue-500 size-4 animate-pulse" />{" "}
            <p className="geist-normal text-sm ">Specialists</p>
          </span>
          <h1 className="geist-bold text-3xl mt-10">
            Find the Right Doctor for Your Needs
          </h1>

          <span className="flex flex-row items-center justify-between">
            <p className="geist-normal mt-2 text-sm text-gray-500">
              Whether you need a general consultation, specialist care or <br />
              mental health support,we have the right doctor for you
            </p>
            <span className="flex flex-row gap-2">
              <button
                className="bg-gray-100 text-blue-500 px-4 py-2 rounded-2xl 
              hover:bg-blue-400 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button className="bg-gray-100 text-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white transition-all cursor-pointer">
                <ChevronRight />
              </button>
            </span>
          </span>
        </div>

        <div className="overflow-hidden">
          <div
            id="drcards"
            className="flex flex-row gap-4 overflow-x-scroll py-20 hide-scrollbar "
          >
            {doctorsData.map((drdata, index) => {
              return (
                <Categoriescard
                  title={drdata.title}
                  img={drdata.img}
                  count={drdata.count}
                  desp={drdata.desp}
                  buttonText={drdata.buttonText}
                  id={drdata.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
