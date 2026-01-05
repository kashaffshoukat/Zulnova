import React from 'react';

const ServiceHomeCard = ({ icon, mainHeading, subHeadings }) => {
    return (
        <div className="
            group
            bg-dark
            border border-gray-200
            rounded-xl p-8  max-w-md h-full
            transform
            hover:bg-[#031942ff]
            hover:text-white
            transition-all duration-300
        ">
            {/* Icon */}
            <p className="text-5xl text-blue-900 mb-6 flex justify-center items-center transition-colors duration-300 group-hover:text-white">
                {icon}
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center transition-colors duration-300 group-hover:text-white">
                {mainHeading}
            </h2>

            {/* Subheadings List */}
            <ul className="space-y-2 text-center">
                {subHeadings?.map((subHeading, index) => (
                    <li
                        key={index}
                        className="text-gray-600 text-lg transition-colors duration-300 group-hover:text-gray-100"
                    >
                        {subHeading}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceHomeCard;
