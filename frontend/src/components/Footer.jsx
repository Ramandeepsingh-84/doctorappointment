// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           <img className='mb-5 w-40' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>greatstackdev@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 md:px-16 lg:px-24 py-16">
      <div className="grid gap-10 md:grid-cols-3">

        {/* Logo and tech-medical description */}
        <div>
          <img src={assets.logo} alt="MediServe Logo" className="mb-5 w-36" />
          <p className="text-sm leading-relaxed text-gray-600 max-w-md">
            MediServe bridges the gap between technology and healthcare, delivering modern digital solutions to simplify and enhance medical services. Our mission is to empower patients and providers through innovative, tech-driven platforms.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Delivery', 'Privacy Policy'].map((item, i) => (
              <li key={i} className="hover:text-black cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li className="hover:text-black transition-colors">+91 9101062891</li>
            <li className="hover:text-black transition-colors">mediserve@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © 2024 MediServe — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
