import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { isValidElement } from "react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-indigo-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-300 border-b-2 border-indigo-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="size-14 rounded-full" src={logo} alt="SB Jobs" />
              <span className="hidden md:block text-indigo-600 text-2xl font-bold ml-2">
                Jobs Portal
              </span>
            </NavLink>
            <div className="md:ml-auto mt-2">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={({isActive}) =>
                    isActive
                      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-indigo-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
