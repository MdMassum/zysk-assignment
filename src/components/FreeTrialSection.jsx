import React from "react";
import Button from "./Button";

const FreeTrialSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Start your free trial</h2>
        <p className="text-gray-600 mt-2">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-6 gap-2 md:gap-4 mx-3">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
            Learn more
          </button>
          <Button className="rounded-md w-full md:w-32">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
