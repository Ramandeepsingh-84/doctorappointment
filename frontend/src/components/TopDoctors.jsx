// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// const TopDoctors = () => {

//     const navigate = useNavigate()

//     const { doctors } = useContext(AppContext)

//     return (
//         <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
//             <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
//             <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//                 {doctors.slice(0, 10).map((item, index) => (
//                     <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                         <img className='bg-[#EAEFFF]' src={item.image} alt="" />
//                         <div className='p-4'>
//                             <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
//                                 <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
//                             </div>
//                             <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//                             <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
//         </div>

//     )
// }

// export default TopDoctors

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className="flex flex-col items-center gap-6 my-20 text-[#262626] md:mx-10 px-4">
            <h1 className="text-3xl font-semibold text-center">Top Doctors to Book</h1>
            <p className="sm:max-w-xl text-center text-sm text-gray-600">
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`)
                            scrollTo(0, 0)
                        }}
                        key={index}
                        className="bg-white border border-gray-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                    >
                        <img className="w-full h-44 object-cover bg-gray-100" src={item.image} alt={item.name} />

                        <div className="p-4 space-y-2">
                            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                                <span>{item.available ? 'Available' : 'Not Available'}</span>
                            </div>
                            <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => {
                    navigate('/doctors')
                    scrollTo(0, 0)
                }}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm px-6 py-3 rounded-full mt-10 transition-all"
            >
                View All Doctors
            </button>
        </div>
    )
}

export default TopDoctors
