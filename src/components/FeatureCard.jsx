import React from "react";

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4 text-3xl text-blue-500">{icon}</div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;
