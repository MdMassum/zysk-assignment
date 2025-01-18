import React from "react";
import userImage from "../../../assets/userImage.png";

const Testimonial = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center px-4">
                {/* Logo Section */}
                <div className="flex justify-center items-center mb-4">
                    <img src="" alt="" />
                    <span className="font-semibold text-lg text-gray-800">Sisyphus</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                    We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                </p>

                {/* User Info */}
                <div className="flex flex-col items-center">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-14 h-14 rounded-full mb-3"
                    />
                    <h4 className="font-medium text-gray-900">Candice Wu</h4>
                    <p className="text-gray-500 text-sm">Product Manager, Sisyphus</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
