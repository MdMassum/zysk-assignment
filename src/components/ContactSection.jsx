import React from "react";
import Button from "./Button";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md md:w-[85%] mx-auto md:p-4 mt-2 mb-3">
      <div className="flex -space-x-2 mb-4">
        {/* Profile images */}
        <img
          className="w-10 h-10 rounded-full border border-gray-300"
          src={""}
          alt="Profile 1"
        />
        <img
          className="w-10 h-10 rounded-full border border-gray-300"
          src={""}
          alt="Profile 2"
        />
        <img
          className="w-10 h-10 rounded-full border border-gray-300"
          src={""}
          alt="Profile 3"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">Still have questions?</h2>
      <p className="text-gray-600 text-center mb-4">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
 
      <Button>Get In Touch</Button>
    </div>
  );
};

export default ContactSection;
