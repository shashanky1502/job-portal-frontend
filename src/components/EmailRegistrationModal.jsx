import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EmailRegistrationModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.110.214.89:3000/email-registration', { address: email });
      if (response.status === 201) {
          navigate('/');
          toast.success('Email registered successfully');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('Email already exists');
      } else {
        toast.error('Failed to register email');
      }
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 relative">
        <button className="absolute top-2 right-2" onClick={handleClose}>X</button>
        <h2 className="text-xl font-semibold mb-4">Register for Job Alerts</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="p-3 border border-gray-200 rounded-lg"
            value={email}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-8 py-3 rounded-full shadow-blue-400 shadow-md hover border-b border-blue-200 hover:shadow-sm transition-all duration-500"
          >
            Register
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EmailRegistrationModal;
