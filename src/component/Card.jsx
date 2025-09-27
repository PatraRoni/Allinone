
import React from "react"
  

function Card({ title1, title2, img }) {
  return (
  
//     <div className="w-full box-border bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[150px] hover:shadow-lg transition overflow-hidden">
//   <div className="flex items-start gap-4">
//     {/* icon - fixed size, won't grow */}
//     <div className="flex-none p-3 bg-blue-100 rounded-lg flex items-center justify-center">
//       <img src={img} alt={`${title1} ${title2} icon`} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
//     </div>

//     {/* title container must be shrinkable: min-w-0 */}
//     <div className="flex-1 min-w-0">
//       <h3
//         className="text-xl font-dmsans font-semibold text-left text-gray-800 leading-snug break-words whitespace-normal"
//         style={{ letterSpacing: '-0.04em' }} // fallback if Tailwind doesn't allow arbitrary tracking
//       >
//         {title1} <span className="block">{title2}</span>
//       </h3>
//     </div>
//   </div>

//   <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
//     <span className="truncate">Click Here To Proceed</span>
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//     </svg>
//   </div>
// </div>


    <div className="w-full box-border bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[150px] hover:shadow-lg transition overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="flex-none p-3 bg-blue-100 rounded-lg flex items-center justify-center">
          <img src={img} alt={`${title1} ${title2} icon`} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
        </div>

        {/* Important: flex-1 + min-w-0 so title wraps instead of pushing width */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-xl font-dmsans font-semibold text-left text-gray-800 leading-snug break-words whitespace-normal"
            style={{ letterSpacing: '-0.04em' }}
          >
            {title1} <span className="block">{title2}</span>
          </h3>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
        <span className="truncate">Click Here To Proceed</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>


  )
}

 export default Card;
