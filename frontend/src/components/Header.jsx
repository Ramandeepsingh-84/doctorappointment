// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

//             {/* --------- Header Left --------- */}
//             <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//                 <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                     Book Appointment <br />  With Trusted Doctors
//                 </p>
//                 <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                     <img className='w-28' src={assets.group_profiles} alt="" />
//                     <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//                 </div>
//                 <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                     Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className='md:w-1/2 relative'>
//                 <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Header

import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-800 rounded-xl overflow-hidden shadow-lg px-6 md:px-12 lg:px-20">

      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 py-14 md:py-24 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="Doctors Group" />
          <p className="text-gray-300 text-center md:text-left">
            Browse our trusted doctor list and <br className="hidden sm:inline" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-sm transition-transform duration-300 hover:scale-105 w-fit"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative flex items-end justify-center">
        <img
          className="w-full md:w-auto md:absolute bottom-0 right-0 object-cover max-h-[500px] md:max-h-none"
          src={assets.header_img}
          alt="Medical Illustration"
        />
      </div>
    </div>
  );
};

export default Header;
