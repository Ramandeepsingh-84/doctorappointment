import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar


// import React, { useContext, useState } from 'react';
// import { assets } from '../assets/assets';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const { token, setToken, userData } = useContext(AppContext);

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between">
//         <img onClick={() => navigate('/')} className="w-40 cursor-pointer" src={assets.logo} alt="Logo" />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm tracking-wide">
//           {['/', '/doctors', '/about', '/contact'].map((path, idx) => {
//             const labels = ['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'];
//             return (
//               <NavLink
//                 key={path}
//                 to={path}
//                 className={({ isActive }) =>
//                   `relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
//                     isActive ? 'text-primary' : 'hover:text-primary'
//                   }`
//                 }
//               >
//                 {labels[idx]}
//               </NavLink>
//             );
//           })}
//         </ul>

//         {/* Profile / Login */}
//         <div className="flex items-center gap-3">
//           {token && userData ? (
//             <div className="relative group cursor-pointer">
//               <div className="flex items-center gap-2">
//                 <img className="w-9 h-9 rounded-full border" src={userData.image} alt="User" />
//                 <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
//               </div>
//               <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-md py-2 px-4 z-30 hidden group-hover:flex flex-col gap-2 text-sm text-gray-700 w-48">
//                 <p onClick={() => navigate('/my-profile')} className="hover:text-primary cursor-pointer">My Profile</p>
//                 <p onClick={() => navigate('/my-appointments')} className="hover:text-primary cursor-pointer">My Appointments</p>
//                 <p onClick={logout} className="hover:text-red-500 cursor-pointer">Logout</p>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate('/login')}
//               className="bg-primary text-white px-6 py-2 rounded-full text-sm shadow-sm hover:bg-opacity-90 transition"
//             >
//               Create Account
//             </button>
//           )}

//           {/* Mobile Menu Icon */}
//           <img
//             onClick={() => setShowMenu(true)}
//             className="w-6 h-6 md:hidden cursor-pointer"
//             src={assets.menu_icon}
//             alt="Menu"
//           />
//         </div>
//       </div>

//       {/* Mobile Slide Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-2xl z-40 transform ${
//           showMenu ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="flex items-center justify-between p-5 border-b">
//           <img src={assets.logo} className="w-32" alt="Logo" />
//           <img
//             onClick={() => setShowMenu(false)}
//             src={assets.cross_icon}
//             className="w-6 cursor-pointer"
//             alt="Close"
//           />
//         </div>
//         <ul className="flex flex-col gap-5 p-5 text-gray-700 font-medium text-base">
//           {[
//             { label: 'HOME', to: '/' },
//             { label: 'ALL DOCTORS', to: '/doctors' },
//             { label: 'ABOUT', to: '/about' },
//             { label: 'CONTACT', to: '/contact' },
//           ].map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               onClick={() => setShowMenu(false)}
//               className="hover:text-primary"
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
