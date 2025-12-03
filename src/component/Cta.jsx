import { BriefcaseMedical, CircleSmall, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";

function Cta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full mx-auto py-15 bg-gray-100 rounded-3xl ">
      <div id="container" className="flex flex-row gap-x-12">
        <div id="text" className="flex flex-col gap-y-4  w-[65%] pl-6">
          <span className="bg-white text-xl text-blue-500 px-4 py-2 rounded-3xl flex flex-row gap-2 w-fit items-center justify-center">
            <CircleSmall className="fill-blue-500 size-4 animate-pulse" />
            <p className="geist-normal text-sm ">Get Appointment</p>
          </span>
          <h1 className="geist-bold text-5xl leading-13">
            Submit request <br /> for appointment
          </h1>
          <p className="geist-semi-bold text-base text-gray-600">
            Your details will be passed along to a scheduling <br />
            specialist who will reach out to you soon.
          </p>

          <div id="contact" className="">
            <span className="flex flex-row gap-2 py-3 ">
              <span className="rounded-full bg-white w-12 h-12 flex items-center justify-center ">
                <PhoneCall size={30} className=" text-blue-500" />
              </span>

              <span>
                <h1 className="geist-normal text-lg">+91 9613258128</h1>
                <p>Call us</p>
              </span>
            </span>
          </div>
        </div>

        <div id="right" className="flex flex-col justify-between">
          <div id="form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 space-y-8 space-x-6"
            >
              <input
                className="border border-gray-200 p-3 rounded-lg bg-white"
                type="text"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              <input
                className="border border-gray-200 p-3 rounded-lg bg-white"
                type="email"
                placeholder="Enter Email id"
                {...register("email", { required: true })}
              />

              <input
                className="border border-gray-200 p-3 rounded-lg bg-white"
                type="number"
                placeholder="Contact"
                {...register("number", { required: true, maxLength: 10 })}
              />
              <textarea
                className="border border-gray-200 p-3 rounded-lg bg-white row-span-2"
                placeholder="Message"
                {...register("message", { required: true })}
              />
              <span className="space-x-3">
                <input
                  className="border border-gray-200 p-3 rounded-lg w-[45%] bg-white"
                  type="date"
                  {...register("date", { required: true })}
                />
                <input
                  className="border border-gray-200 p-3 rounded-lg w-[45%] bg-white"
                  type="time"
                  {...register("time", { required: true })}
                />
              </span>
              <div
                id="formtext"
                className=" "
              >
                <p className="geist-semi-bold text-base text-gray-600">
                  Your privacy is our priority. We will only gather your
                  information with your clear and explicit consent.
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 py-3 px-6 rounded-4xl geist-semi-bold text-white flex flex-row gap-x-2 h-fit w-fit place-self-end mb-15 mr-8 cursor-pointer hover:bg-blue-500 self-end"
              >
                <BriefcaseMedical />
                Get Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
