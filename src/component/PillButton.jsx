// PillButton.jsx
import React from "react";


export default function PillButton({ label, img, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={
        "w-full sm:w-auto inline-flex items-center justify-center gap-2 " +
        "bg-gray-800 text-gray-300 rounded-full shadow-sm " +
        "px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 " +
        "text-xs sm:text-sm md:text-base " +
        "transition-colors duration-150 hover:bg-gray-700 " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      }
      // safe fallback for letter spacing — works even if Tailwind JIT is disabled
      style={{ letterSpacing: "-0.04em" }}
    >
      {img && (
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 object-contain"
        />
      )}
      <span className="font-dmsans">{label}</span>
    </button>


    );
}
