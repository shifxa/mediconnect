import { BriefcaseMedical, Hospital, Mail, MapPin, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="pt-30">
      <div
        id="details"
        className="flex flex-row gap-x-10 bg-blue-300 text-white m-7 p-12 rounded-2xl "
      >
        <div className="flex flex-row items-start gap-x-8 w-[33%]">
          <Mail className="text-blue-800" size={40} />
          <span className="flex flex-col gap-y-1">
            <h1 className="geist-bold text-3xl">Email</h1>
            <hr />
            <p className="text-lg">support@mediconnect.com</p>
          </span>
        </div>

        <div className="flex flex-row items-start gap-x-8 w-[33%]">
          <MapPin className="text-blue-800 scale-500 pt-1" />
          <span className="flex flex-col gap-y-1">
            <h1 className="geist-bold text-3xl">Our Locations</h1>
            <hr />
            <p className="text-lg">
              Office No.13, Gr. floor, Bldg. No.3, Khandwala compound, Datta
              mandir road, Vakoila Bridge, Ssantacruz (East), Mumbai - 400 055.
            </p>
          </span>
        </div>

        <div className="flex flex-row items-start gap-x-8 w-[33%]">
          <PhoneCall className="text-blue-800" size={40} />
          <span className="flex flex-col gap-y-1">
            <h1 className="geist-bold text-3xl">Phone Number</h1>
            <hr />
            <p className="text-lg">+91 9326233979</p>
          </span>
        </div>
      </div>

      <div id="formap" className="flex flex-row w-[95%] gap-6 mx-auto mt-25 mb-25">
        <div id="form" className="w-[50%] ">
          <span className="flex flex-row gap-x-2  ">
            <Hospital className="text-blue-500" size={40}/>
            <h1 className="geist-bold text-4xl">Get in touch with Mediconnect</h1>
            </span>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 px-4 py-10 gap-x-2 gap-y-8  border-blue-500 border rounded-xl mt-4 hover:shadow-lg bg-blue-100 opacity-85   ">
            <input
            className="border border-gray-200 p-3 rounded-lg bg-white"
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            <input
            className="border border-gray-200 p-3 rounded-lg bg-white"
              type="email"
              placeholder="Email ID"
              {...register("email", { required: true })}
            />

            <select
            className="border border-gray-200 p-3 rounded-lg bg-white"
              id=""
              {...register("specialist", { required: true })}
            >
              <option value="" disabled >Select Specialist </option>
              <option value="">Dermatology</option>
              <option value="">Gynecology</option>
              <option value="">Cardiology</option>
              <option value="">neurology</option>
              <option value="">dentist</option>
              <option value="">nephrologist</option>
              <option value="">gastorenterology</option>
              <option value="">ENT Specialist</option>
              <option value="">pshychiatrist</option>
              <option value="">Orthopedic</option>
              <option value="">General Physician</option>
            </select>

            <input
            className="border border-gray-200 p-3 rounded-lg bg-white"
              type="tel"
              placeholder="Contact"
              {...register("number", { required: true, maxLength: 10 })}
            />

             <input
                  className="border border-gray-200 p-3 rounded-lg bg-white"
                  type="date"
                  {...register("date", { required: true })}
                />

                <input
                  className="border border-gray-200 p-3 rounded-lg bg-white"
                  type="time"
                  {...register("time", { required: true })}
                />

            <textarea
            className="border border-gray-200 p-3 rounded-lg bg-white col-span-2"
              type="text"
              placeholder="Message"
              {...register("message", { required: true })}
            />

            <button
                type="submit"
                className="bg-blue-600 py-3 px-8 rounded-4xl geist-semi-bold text-white flex flex-row gap-x-2 h-fit w-fit place-self-center col-span-2 cursor-pointer hover:bg-blue-500 "
              >
                <BriefcaseMedical />
                Get Appointment
              </button>
          </form>
        </div>
        <div id="map" className="bg-amber-600 w-[50%]">
          Map
        </div>
      </div>
    </section>
  );
}

export default Contact;
