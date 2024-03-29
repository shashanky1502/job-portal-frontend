import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobModal from './JobModal';

const CardSection = () => {
  const [cards, setCards] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://3.110.214.89:3000/jobs');
        setCards(response.data);
        setIsLoading(false);
        console.log("Data fetched successfully");
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="bg-blue-100 pt-20 p-10 relative">
      {isLoading && <div className="absolute inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">Loading...</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...cards].reverse().map((card, index) => ( 
          <div key={index} className="bg-white shadow-md rounded-lg p-6 relative">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <div className='pt-4 pb-4'>
              <img src={card.companyLogo} alt="logo" className="w-18 h-8 mx-auto " />
            </div>
            <p className="text-xl text-gray-600 mt-2">Company: {card.company}</p>
            <p className="text-gray-600">Experience: {card.MinExperience}</p>
            <p className="text-gray-600">Location: {card.location}</p>
            <div className="mx-auto pt-4">
              <button onClick={() => handleViewDetails(card)} className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-8 py-3 rounded-full shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500" > View </button>
            </div>
          </div>
        ))}
      </div>
      {selectedJob && <JobModal jobDetails={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
};

export default CardSection;
