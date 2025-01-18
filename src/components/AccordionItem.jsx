import { useState } from "react";

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            {/* Question Section */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center cursor-pointer"
            >
                <h4 className="text-lg font-medium text-gray-900">{question}</h4>
                <span className="text-gray-400 text-2xl">
                    {isOpen ? "−" : "+"}
                </span>
            </div>
            {/* Answer Section */}
            {isOpen && (
                <p className="mt-2 text-gray-600 text-sm">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default AccordionItem