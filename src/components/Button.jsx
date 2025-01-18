import React from "react";

const Button = ({ children, className = "", btnType = "filled", ...props }) => {
    // Define button styles based on the `btnType` prop
    const buttonStyles =
        btnType === "outline"
            ? "border border-2 text-black bg-transparent text-sm" // Outline style
            : "bg-[#E63F3A] text-white hover:bg-red-600"; // Filled style

    return (
        <button
            {...props}
            className={`rounded-md px-4 py-2 ${buttonStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
