// import React from "react";

import { useParams } from "react-router-dom";
import Cta from "../component/Cta";


export const service = [
  {
    slug: "dermatology",
    title: "Dermatology",
    tagline: "Advanced skin care for healthy, clear, confident, and glowing skin daily",
    img: "/specialist/dermaban.png",
    info: "Our Dermatology Department delivers expert care for all skin, hair, and nail concerns using modern diagnostic tools and advanced treatment techniques. We manage acne, pigmentation, allergies, infections, eczema, psoriasis, and chronic skin disorders with precision and personalized care. With a focus on long-term skin health, preventive treatments, and comfort, our dermatologists ensure accurate evaluation for every patient. From routine checkups to advanced procedures, we help individuals maintain healthy, glowing, and problem-free skin.",
    solution: "Our Dermatology Department provides comprehensive, patient-focused solutions for a wide range of skin, hair, and nail conditions. We specialize in acne treatment, pigmentation correction, allergy management, chronic skin conditions, mole examination, hair fall treatment, and nail disorder care. With the help of advanced technologies such as dermatoscopy, chemical peels, laser therapy, and skin rejuvenation procedures, our team ensures accurate diagnosis and effective long-term results. Every treatment plan is personalized based on skin type, medical history, and lifestyle. We prioritize safe, evidence-based procedures and focus on restoring confidence by improving both skin health and overall appearance.",
    solimg: "/specialist/dermacsolu.png",
    results: {
      testimony: "\"My acne and pigmentation cleared beautifully. The treatment was gentle, effective, and handled with great care. Highly recommended.\"",
      patimg: "/specialist/test1.png",
      name: "Priya Sharma",
    },
  },

  {
    slug: "gynecology",
    title: "Gynecology",
    tagline: "Compassionate women’s care for every stage, every need, every journey",
    img: "/specialist/gynecban.png",
    info: "Our Gynecology Department offers complete healthcare support for women at every stage of life. We address menstrual issues, PCOS, hormonal imbalances, fertility concerns, pregnancy care, menopause, infections, and preventive screenings. With a compassionate and confidential approach, our specialists focus on accurate diagnosis, long-term wellness, and personalized treatment. Whether for routine checkups or complex reproductive concerns, we ensure comfort, safety, and holistic care for every woman.",
    solution: "Our Gynecology Department provides advanced and compassionate care for all women's health needs. From menstrual irregularities, PCOS, infertility, and pregnancy monitoring to menopause management and advanced diagnostic screenings, we ensure thorough evaluation and individualized treatment plans. Our services include ultrasound diagnostics, prenatal care, minimally invasive procedures, infection management, and reproductive health counseling. Our specialists prioritize privacy, emotional comfort, and safety throughout every stage of treatment. Whether you require routine checkups, pregnancy support, hormonal balance treatment, or guidance for long-term well-being, we offer reliable, evidence-based care tailored to your unique health needs.",
    solimg: "/specialist/gynecsolu.png",
    results: {
      testimony: "\"My pregnancy journey felt safe and stress-free. The gynecologist guided me with care and personal attention throughout.\"",
       patimg: "/specialist/test1.png",
      name: "Aarti Verma",
    },
  },

  {
    slug: "cardiology",
    title: "Cardiology",
    tagline: "Advanced cardiac treatment focused on protecting and restoring your heart",
    img: "/specialist/cardioban.png",
    info: "Our Cardiology Department provides advanced heart care for diagnosis, prevention, and long-term management of cardiac diseases. We evaluate chest pain, hypertension, arrhythmias, cholesterol issues, heart failure, and coronary disease using state-of-the-art tools such as ECG, Echo, Holter, Stress Test, and Angiography. With personalized care plans and preventive guidance, our cardiologists ensure safe, precise, and compassionate heart health management.",
    solution: "Our Cardiology Department offers extensive, technology-driven care designed to diagnose, treat, and prevent a wide range of heart conditions. Using advanced tools such as ECG, 2D-Echocardiography, Stress Testing, Holter Monitoring, and Angiography, we ensure early detection and accurate evaluation of cardiac concerns. Our cardiologists specialize in treating hypertension, arrhythmias, coronary artery disease, heart failure, and chest pain with precision. We emphasize preventive care, lifestyle guidance, and long-term recovery planning to strengthen overall heart health. Whether you require routine screenings, emergency cardiac care, minimally invasive procedures, or rehabilitation after surgery, our dedicated team ensures safe, reliable, and comprehensive heart care.",
    solimg: "/specialist/cardiosolu.png",
    results: {
      testimony: "\"My heart condition improved dramatically with their treatment. The doctor explained everything clearly and guided me throughout recovery.\"",
       patimg: "/specialist/test2.png",
      name: "Rohit Mehra",
    },
  },

  {
    slug: "neurosurgeon",
    title: "Neurosurgeon",
    tagline: "Specialized brain and nerve treatments for better control and comfort",
    img: "/specialist/neuroban.png",
    info: "Our Neurosurgery Department provides expert care for disorders of the brain, spine, and nerves. We manage migraines, nerve compression, spine injuries, disc problems, tumors, and neurological trauma with advanced imaging support and precise evaluation. With a focus on safety and long-term recovery, we offer tailored treatment plans to improve mobility, relieve pain, and restore neurological function.",
    solution: "Our Neurosurgery Department delivers highly specialized care for complex conditions related to the brain, spine, and peripheral nerves. Using cutting-edge diagnostics such as MRI, CT scan, EMG, and neuro-navigation, we ensure accurate evaluation and safe treatment planning. Our neurosurgeons manage spine disorders, nerve compression, neural injuries, brain tumors, trauma, and chronic neurological pain through advanced surgical and minimally invasive procedures. We emphasize reducing complications, preserving neurological function, and supporting long-term rehabilitation. With compassionate guidance, personalized treatment, and continuous monitoring, we help patients regain mobility, improve neurological strength, and return to daily life with confidence.",
    solimg: "/specialist/neurocsolu.png",
    results: {
      testimony: "\"My spine pain reduced significantly after treatment. The doctor was patient, skilled, and very reassuring.\"",
       patimg: "/specialist/test1.png",
      name: "Deepak Thakur",
    },
  },

  {
    slug: "orthopedic",
    title: "Orthopedic",
    tagline: "Expert bone and joint care restoring mobility, strength, and active living",
    img: "/specialist/orthoban.png",
    info: "Our Orthopedic Department provides complete care for bone, joint, muscle, ligament, and sports-related injuries. From fractures, arthritis, and back pain to joint stiffness and spine disorders, our specialists ensure accurate diagnosis and personalized treatment. With physiotherapy support and advanced procedures, we help restore mobility, reduce pain, and improve long-term musculoskeletal health.",
    solution: "Our Orthopedic Department offers comprehensive solutions for all bone, joint, and musculoskeletal conditions. We treat fractures, arthritis, ligament injuries, shoulder issues, lower back pain, joint stiffness, and spine problems with precision. Our specialists use digital X-rays, physiotherapy support, joint injections, arthroscopy, and minimally invasive surgical options to ensure effective results and faster recovery. Each treatment plan is customized to improve mobility, reduce pain, and restore strength. Whether recovering from a sports injury or dealing with chronic orthopedic concerns, our focus remains on long-term relief, rehabilitation, and improved quality of life through expert orthopedic care.",
    solimg: "/specialist/orthosolu.png",
    results: {
      testimony: "\"I can walk pain-free again after months. The orthopedic team treated me with patience and expertise.\"",
       patimg: "/specialist/test1.png",
      name: "Sanjay Gupta",
    },
  },

  {
    slug: "gastroentrologist",
    title: "Gastroenterologist",
    tagline: "Expert digestive care ensuring comfort, relief, and long-term gastrointestinal wellness",
    img: "/specialist/gasban.png",
    info: "Our Gastroenterology Department treats disorders of the stomach, liver, pancreas, intestines, and digestive system. We manage acidity, gastritis, IBS, fatty liver, ulcers, infections, and chronic GI issues with accurate evaluation and personalized treatment plans. With advanced diagnostic tools, we ensure digestive comfort and long-term gut health.",
    solution: "Our Gastroenterology Department provides specialized and detailed care for all digestive system concerns. From acidity, gastritis, constipation, IBS, and fatty liver to chronic liver disease, ulcers, infections, and pancreatic disorders, our specialists ensure accurate diagnosis and effective treatment. We offer endoscopy, colonoscopy, liver profiling, ultrasound, and advanced imaging to identify the root cause of symptoms. Treatment plans include lifestyle guidance, medication support, diet modifications, and long-term digestive wellness planning. Our focus is on comfort, prevention, and restoring a healthy digestive balance for every patient.",
    solimg: "/specialist/gassolu.png",
    results: {
      testimony: "\"My acidity and stomach pain finally improved after months. The treatment was simple, effective, and comforting.\"",
       patimg: "/specialist/test1.png",
      name: "Kavita Shah",
    },
  },

  {
    slug: "Generalphysician",
    title: "General physician",
    tagline: "Reliable medical guidance for checkups, diagnoses, treatments, and overall wellbeing",
    img: "/specialist/generalban.png",
    info: "Our General Medicine Department provides comprehensive primary healthcare for all age groups. We treat fever, cold, infections, allergies, fatigue, diabetes, BP, thyroid issues, and seasonal illnesses with accurate diagnosis. With a preventive and holistic approach, we support long-term wellness and everyday health needs.",
    solution: "Our General Medicine Department offers complete medical care for everyday health concerns and long-term disease management. We treat viral infections, fever, allergies, fatigue, digestive issues, diabetes, hypertension, thyroid disorders, and chronic medical conditions with precision. Our physicians focus on accurate diagnosis, preventive care, lifestyle guidance, and patient education. With routine checkups, early detection, and personalized care plans, we help individuals and families maintain stable, long-term health.",
    solimg: "/specialist/generalsolu.png",
    results: {
      testimony: "\"My recurring fever finally stopped after proper diagnosis. The physician explained everything clearly and treated me with care.\"",
       patimg: "/specialist/test1.png",
      name: "Aman Joshi",
    },
  },

  {
    slug: "psychiatrist",
    title: "Psychiatrist",
    tagline: "Compassionate mental health care for stronger minds and peaceful living",
    img: "/specialist/psychban.png",
    info: "Our Psychiatry Department provides expert mental health support for anxiety, depression, stress, trauma, sleep issues, behavioral concerns, and emotional imbalance. With compassionate and confidential care, we ensure long-term emotional well-being through therapy, counseling, and personalized treatment plans.",
    solution: "Our Psychiatry Department focuses on delivering compassionate, confidential, and personalized mental health care. We treat anxiety, depression, stress, trauma, anger issues, OCD, panic disorders, sleep problems, and emotional challenges using therapy, counseling, medication support, and holistic wellness planning. Each treatment plan is tailored to the individual's needs, ensuring comfort, safety, and long-term emotional stability. Our goal is to help patients regain clarity, self-confidence, and peace while improving daily functioning and overall mental well-being.",
    solimg: "/specialist/psychsolu.png",
    results: {
      testimony: "\"My anxiety reduced significantly. The psychiatrist listened patiently and guided me with the right treatment.\"",
      patimg: "/specialist/test1.png",
      name: "Neha Kapoor",
    },
  },

  {
    slug: "entspecialist",
    title: "ENT Specialist",
    tagline: "Precision ENT care restoring your hearing, breathing, and overall comfort",
    img: "/specialist/entban.png",
    info: "Our ENT Department provides treatment for ear, nose, throat, sinus, tonsils, allergies, hearing issues, and voice problems. With modern testing and expert diagnosis, we ensure long-term ENT health and comfort for patients of all ages.",
    solution: "Our ENT Department offers precise, advanced, and comfortable care for all ear, nose, and throat concerns. We treat infections, allergies, sinusitis, tonsillitis, hearing loss, snoring, vertigo, voice disorders, and throat issues using modern diagnostic tools such as endoscopy, audiometry, and allergy testing. Our specialists focus on quick relief, preventive care, and long-term wellness. With minimally invasive procedures and personalized treatment plans, we aim to improve breathing, hearing, and overall ENT function for every patient.",
    solimg: "/specialist/entsolu.png",
    results: {
      testimony: "\"My sinus problem finally cleared after years. The ENT specialist treated me calmly and effectively.\"",
       patimg: "/specialist/test2.png",
      name: "Rita Jain",
    },
  },

  {
    slug: "nephrologist",
    title: "Nephrologist",
    tagline: "Protecting kidney health with expert diagnosis, treatment, and compassionate care",
    img: "/specialist/nephroban.png",
    info: "Our Nephrology Department provides expert care for kidney diseases, infections, stones, high creatinine, electrolyte imbalance, and chronic renal issues. With advanced diagnostics and long-term monitoring, we ensure safe and effective kidney health management.",
    solution: "Our Nephrology Department specializes in diagnosing and treating kidney-related problems with high precision and constant support. We manage kidney infections, stones, chronic kidney disease, high creatinine levels, fluid-electrolyte imbalance, and long-term renal complications through advanced testing and individualized treatments. Our services include dialysis support, renal profiling, imaging tests, lifestyle guidance, and continuous monitoring for high-risk patients. With early detection and comprehensive kidney-care planning, we help patients maintain stable kidney function and avoid further complications.",
    solimg: "/specialist/neprosolu.png",
    results: {
      testimony: "\"My creatinine levels improved with proper treatment. The nephrologist guided me patiently and clearly.\"",
       patimg: "/specialist/test2.png",
      name: "Imran Shaikh",
    },
  },

  {
    slug: "dentist",
    title: "Dentist",
    tagline: "Professional dental care ensuring strong teeth, fresh smiles, lifelong confidence",
    img: "/specialist/dentistban.png",
    info: "Our Dental Department offers complete care for oral hygiene, tooth pain, sensitivity, cavities, gum infections, cosmetic dentistry, braces, and smile restoration. With modern tools and hygienic procedures, we ensure pain-free dental treatments for all age groups.",
    solution: "Our Dental Department provides full-spectrum oral care, including teeth cleaning, fillings, root canals, extractions, cosmetic dentistry, smile correction, braces, crowns, and gum disease treatment. Using advanced dental tools, digital X-rays, and sterilized procedures, our dentists ensure safe, comfortable, and effective treatments. We emphasize preventive dental education, routine checkups, and long-term oral care planning to help patients maintain healthy gums, strong teeth, and confident smiles. Every treatment is customized to ensure minimal discomfort and maximum results.",
    solimg: "/specialist/dentistsolu.png",
    results: {
      testimony: "\"My smile looks so much better now. The dentist made the procedure completely painless and comfortable\"",
      patimg: "/specialist/test1.png",
      name: "Simran Patel",
    },
  },
];


function Specialities() {
  const { slug } = useParams();

  const data = service.find((data, index) => {
    return data.slug == slug;
  });

  return (
    <main className="w-[95vw] mx-auto">
      <section className="w-full min-h-screen flex items-end justify-center ">
        <div className="w-full h-[90vh] flex items-center justify-center overflow-hidden mx-auto rounded-2xl relative">
          <img
            src={data?.img}
            alt="banner"
            className="w-full h-full object-cover absolute z-[-2]"
          />
          <div className="absolute size-full bg-black/50 z-[-1]"></div>
          <span className="geist-bold text-white text-center z-10 space-y-2">
            <h1 className="text-8xl">{data?.title}</h1>
            <p className="text-xl text-gray-200 ">{data.tagline}
            </p>
          </span>
        </div>
      </section>

      {/* intro section div--------------- */}
      <section className="w-full min-h-screen ">
        <div id="intro" className="w-full p-10 pt-12">
          <div className="w-full flex flex-row items-start justify-between mx-auto gap-x-9">
            <span className="w-[30%] geist-bold text-5xl pt-3">
              <h1>Intro Service</h1>
            </span>
            <span className="w-[70%] geist-normal text-gray-500 text-justify">
              <p>
                {data.info}
              </p>
            </span>
          </div>
        </div>

        {/* solution section div--------------- */}
        <div id="solution" className="w-full p-8">
          <div className="w-full flex flex-row items-start  justify-between mx-auto gap-x-9">
            <span className="w-[30%] geist-bold text-5xl pt-3">
              <h1>Solution</h1>
            </span>
            <span className="w-[70%] geist-normal text-gray-500 text-justify space-y-5">
              <img src={data.solimg} alt="" />
              <p>
               {data.solution}
              </p>

            </span>
          </div>
        </div>

        {/* results section div--------------- */}
        <div id="solution" className="w-full p-8">
          <div className="w-full flex flex-row items-start  justify-between mx-auto gap-x-9">
            <span className="w-[30%] geist-bold text-5xl pt-3">
              <h1>Results</h1>
            </span>

            <span className="w-[70%] geist-normal text-white text-justify space-y-5 bg-linear-to-br from-blue-600 to-blue-300">
              <p className="gesit-semi-bold text-xl p-5 px-10 pt-9">
                {data.results.testimony}
              </p>
              <span className="flex flex-row gap-2 py-8 px-10">
                <img
                  src={data.results.patimg}
                  alt="patimg"
                  className="w-14 h-14 rounded-full"
                />

                <span>
                  <h1 className="geist-normal text-lg">{data.results.name}</h1>
                  <p>patient</p>
                </span>
              </span>
            </span>
          </div>
        </div>
      </section>

    <Cta />

    </main>
  );
}

export default Specialities;
