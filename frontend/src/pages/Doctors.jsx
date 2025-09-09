// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate, useParams } from 'react-router-dom'

// const Doctors = () => {

//   const { speciality } = useParams()

//   const [filterDoc, setFilterDoc] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const navigate = useNavigate();

//   const { doctors } = useContext(AppContext)

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(() => {
//     applyFilter()
//   }, [doctors, speciality])

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialist.</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
//         <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>General physician</p>
//           <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gynecologist</p>
//           <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Dermatologist</p>
//           <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Pediatricians</p>
//           <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Neurologist</p>
//           <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gastroenterologist</p>
//         </div>
//         <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//           {filterDoc.map((item, index) => (
//             <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//               <img className='bg-[#EAEFFF]' src={item.image} alt="" />
//               <div className='p-4'>
//                 <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
//                   <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
//                 </div>
//                 <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//                 <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors


import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="py-10 px-5 sm:px-16 bg-[#f9faff] min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Specialist</h2>
      <p className="text-gray-600">Browse through top-rated doctors by speciality.</p>

      <div className="mt-6 flex flex-col sm:flex-row gap-6">
        {/* Filters */}
        <div className="sm:w-1/4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 sm:hidden bg-white border px-4 py-2 rounded-md shadow hover:bg-primary hover:text-white transition-all"
          >
            <FaFilter />
            Filters
          </button>
          <div className={`${showFilter ? 'flex' : 'hidden sm:flex'} flex-col gap-3 mt-4 sm:mt-0`}>
            {specialities.map((item, idx) => (
              <div
                key={idx}
                onClick={() =>
                  speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)
                }
                className={`cursor-pointer px-4 py-2 rounded-md border hover:bg-blue-100 transition-all duration-200 ${
                  speciality === item ? 'bg-blue-100 text-blue-800 font-medium' : 'text-gray-600'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="cursor-pointer rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-xl bg-[#eaefff]"
              />
              <div className="p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-500' : 'bg-red-400'
                    }`}
                  ></span>
                  <span
                    className={`${
                      item.available ? 'text-green-600' : 'text-gray-400'
                    } font-medium`}
                  >
                    {item.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                  {item.speciality}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
