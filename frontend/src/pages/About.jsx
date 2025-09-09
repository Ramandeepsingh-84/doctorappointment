// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//           <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About


import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#d0eafc] to-[#e2f3ff] px-6 md:px-20 py-14 text-gray-800 font-[Inter]">

      {/* Title */}
      <div className="text-center mb-14 animate-fade-in-up">
        <h2 className="text-5xl font-bold tracking-tight text-[#033b5d]">ABOUT <span className="text-[#0562a1]">US</span></h2>
        <div className="w-24 h-1 mx-auto mt-3 bg-[#00aaff] rounded-full shadow-md animate-glow"></div>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row gap-10 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl animate-fade-in-up transition-transform duration-500 hover:scale-[1.01]">
        <img
          src={assets.about_image}
          alt="About Prescripto"
          className="rounded-xl shadow-lg w-full md:max-w-md object-cover border-[4px] border-[#00aaff]"
        />
        <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-gray-700">
          <p><span className="text-[#0077cc] font-bold">Prescripto</span> is your all-in-one platform to manage doctor appointments, health records, and more with ultimate ease. Built for convenience, designed for humans.</p>
          <p>We continuously evolve our platform to deliver seamless access to healthcare. Whether it's your first check-up or long-term care — we’re right there with you, powered by smart tech and real empathy.</p>
          <div>
            <h3 className="text-xl font-bold text-[#033b5d] mb-2">🚀 Our Vision</h3>
            <p>To create a smarter, faster, and more human healthcare experience. We bridge patients and doctors through smooth tech and intuitive design — anytime, anywhere.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-20 mb-10 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-[#033b5d]">WHY <span className="text-[#00aaff]">CHOOSE US</span></h2>
        <div className="w-24 h-1 mx-auto mt-3 bg-[#00aaff] rounded-full shadow-md animate-glow"></div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
        {[
          {
            icon: "⚡",
            title: 'EFFICIENCY',
            desc: 'Lightning-fast appointment scheduling with zero hassle.',
          },
          {
            icon: "🌍",
            title: 'CONVENIENCE',
            desc: 'Connect with local healthcare professionals anytime.',
          },
          {
            icon: "🧠",
            title: 'PERSONALIZATION',
            desc: 'Custom health tips and smart reminders, just for you.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl border border-[#00aaff40] hover:border-[#00aaff] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-[#033b5d] mb-2">{item.title}</h4>
            <p className="text-gray-700 text-[15px]">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About
