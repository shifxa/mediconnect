import { ChevronRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { service } from "../pages/Specialities";

function header() {
  return (
    <nav className="fixed w-full z-9999999">
      <div className="flex flex-row w-[90vw] items-center justify-between mx-auto mt-4 bg-white p-2 rounded-full px-6">
        <div id="nav-logo">
          <img
            src="/mediconnect logo.png"
            alt="mediconnect"
            className="w-42 object-contain "
          />
        </div>

        <div className="flex flex-row gap-12 text-l font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-800 " : "hover:text-blue-800 hover:"
            }
            to="/"
          >
            Home
          </NavLink>

          <span
            className= "hover:text-blue-800  flex flex-row relative group"
          >
            <p>Specialities</p>
            <ChevronDown />
            <span className="absolute top-5 bg-white p-6 hidden  group-hover:flex flex-col space-y-1.5 pt-6 rounded-b-lg opacity-95">
              {service.map((data, index) => {
                return (
                  <NavLink className="text-black hover:text-blue-800" key={index} to={`/specialities/${data.slug}`}>
                    {data.title}
                  </NavLink>
                );
              })}
            </span>
          </span>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-800 " : "hover:text-blue-800 hover:"
            }
            to="/contact"
          >
            Contact us
          </NavLink>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex cursor-pointer hover:bg-blue-400 ">
          <p>Book Appointment</p>
          <ChevronRight />
        </button>
      </div>
    </nav>
  );
}

export default header;
