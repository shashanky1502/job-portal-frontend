import React from "react";
import hippImage from "../Images/1234.jpg";
import { FaArrowDown, FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {

    const handleClick_arrow = () => {
        window.scrollTo({
            top: 350,
            behavior: 'smooth'
        });
    };

  return (
    <div className="bg-blue-100">
      <div>
        <div className="container mx-auto pt-40 pb-20">
          <h1 className="inset-0 block text-4xl font-bold text-gray-800">
            Welcome to JobHost✌️
          </h1>
          <p className="text-xl text-gray-600 ">Find your dream job with us</p>
          <div className="pt-20">
  <button class="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-4 py-3 rounded-full shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500" onClick={handleClick_arrow}><FaArrowDown /></button>
        </div>
        </div>
        
        <div className="container mx-auto pt-10 px-20   ">
          <div>
            <div className="flex flex-row">
              <div>
                <img src={hippImage} alt="hippImage" className="w-80 h-80 rounded-md" />
              </div>
                <div className="w-5/6  bg-white mx-0 p-10">
                    <h1 className="text-4xl font-bold text-gray-800">
                    Never Miss a Job Opportunity Again! Stay in the Loop with JobHost.
                    </h1>
                    <p className="text-2xl text-gray-600 pt-10 flex flex-col items-center">
                    <FaBell className="w-20"/>Press the bell icon and enter your email to receive notifications for every new job posted!
                    </p>
                    </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/jobs">
      <div className="mx-auto pt-4 pb-20">
  <button class="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-4 py-3 rounded-full shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500" > Explore Jobs 🌞 </button>
        </div>
        </Link>
    </div>
    
  );
};

export default Hero;
