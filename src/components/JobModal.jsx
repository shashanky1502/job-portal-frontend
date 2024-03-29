import React from 'react';
import { FaTimes } from 'react-icons/fa';

const JobModal = ({ jobDetails, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-500">
          <FaTimes />
        </button>
        <img src={jobDetails.companyLogo} alt="logo" className="w-18 h-8 mx-auto " />
        <h2 className="text-xl font-semibold mb-4">{jobDetails.title}</h2>
        <p className="text-gray-600">Salary: {jobDetails.salary}</p>
        <p className="text-gray-600">Work Type: {jobDetails.WorkType}</p>
        <p className="text-gray-600">Company: {jobDetails.company}</p>
        <p className="text-gray-600">Experience Required: {jobDetails.MinExperience}</p>
        <p className="text-gray-600">Location: {jobDetails.location}</p>
        <a href={jobDetails.applyLink} className="mx-auto pt-4">
              <button className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-8 py-3 rounded-full shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500" > Apply </button>
         </a>
      </div>
    </div>
  );
};

export default JobModal;
 