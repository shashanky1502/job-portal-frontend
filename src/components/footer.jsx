import React from "react";
import logo from "../Images/logo.svg";

const Footer = () => {
    return (
        <footer className="text-white">
        <div className="container mx-auto py-12 px-4">
            <div className="flex justify-center flex-col">
                <img src={logo} alt="logo" className="w-40  mx-auto" />
                <p className="mt-6 text-gray-800">The best place to find your dream job</p>
            </div>

        </div>
        <div className="bg-gray-900">
            <div className="container mx-auto py-4 px-4">
            <div className="flex flex-wrap items-center">
                <div className="w-full text-center md:text-center">
                <p className="text-sm text-gray-400">&copy; 2024 JobHost. All rights reserved.</p>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;