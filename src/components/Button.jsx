import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-[#FFF6EA] px-4 py-2 text-xs md:text-base rounded-md text-stone-600 hover:bg- hover:text-stone-900 hover:scale-105"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
