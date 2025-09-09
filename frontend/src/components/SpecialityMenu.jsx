// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
//             <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
//             <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
//                 {specialityData.map((item, index) => (
//                     <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                         <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
//                         <p>{item.speciality}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SpecialityMenu

import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id="speciality" className="flex flex-col items-center gap-6 py-16 px-4 text-[#262626] bg-[#f8f9fa]">
            <h1 className="text-3xl font-semibold">Find by Speciality</h1>
            <p className="text-center text-sm sm:max-w-xl text-gray-600">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>

            <div className="w-full overflow-x-auto scrollbar-hide pt-8">
                <div className="flex gap-6 min-w-max sm:justify-center">
                    {specialityData.map((item, index) => (
                        <Link
                            to={`/doctors/${item.speciality}`}
                            onClick={() => scrollTo(0, 0)}
                            key={index}
                            className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-xl rounded-xl px-4 py-6 transition-all duration-300 cursor-pointer hover:-translate-y-2 flex-shrink-0 w-32 sm:w-40"
                        >
                            <img
                                className="w-12 sm:w-16 mb-3 object-contain"
                                src={item.image}
                                alt={item.speciality}
                            />
                            <p className="text-sm font-medium text-center text-[#333]">{item.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecialityMenu
