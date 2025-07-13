// import { Link } from 'react-router-dom'

// const Navbar = ({ handleAboutClick }) => {
//   return (
//     <div className="bg-[rgb(215,212,215)]">
//       <nav className="flex items-center justify-between p-2 text-white">
//         <img className="h-30" src="logo.png" alt="Logo BbyB" />

//         <ul className="flex items-center justify-center gap-12 p-5 text-2xl font-bold">
//           <li className="text-red-700 text-4xl cursor-pointer hover:text-red-500 transition">
//            <Link to="/">HOME</Link>
//           </li>
//           <li className="cursor-pointer hover:text-blue-600 transition">
//             <Link to="/Blog">BLOGS</Link>
//           </li>
//           <li className="cursor-pointer hover:text-blue-600 transition">
//            <Link to="/Services">SERVICES</Link>
//             </li>
//           <li className="cursor-pointer hover:text-blue-600 transition" onClick={ handleAboutClick }>
//            <Link to="/#aboutus">ABOUT US</Link>
//  {/* ABOUT US */}
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // optional icons, or replace with text

// const Navbar = ({ handleAboutClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-[rgb(215,212,215)]">
//       <nav className="flex items-center justify-between p-2 text-white">
//        <Link to="/"><img className="h-30" src="logo.png" alt="Logo BbyB" /></Link>

//         {/* Hamburger for small screens */}
//         <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} className="text-red-700" /> : <Menu size={28} className="text-red-700" />}
//         </div>

//         {/* Menu */}
//         <ul
//           className={`flex-col md:flex md:flex-row md:items-center md:justify-center gap-12 p-5 text-2xl font-bold
//           ${isOpen ? 'flex' : 'hidden'} md:flex`}
//         >
//           <li className="text-red-700 text-4xl cursor-pointer hover:text-red-500 transition">
//             <Link to="/">HOME</Link>
//           </li>
//           <li className="cursor-pointer hover:text-blue-600 transition">
//             <Link to="/Blog">BLOGS</Link>
//           </li>
//           <li className="cursor-pointer hover:text-blue-600 transition">
//             <Link to="/Services">SERVICES</Link>
//           </li>
//           <li
//             className="cursor-pointer hover:text-blue-600 transition"
//             onClick={handleAboutClick}
//           >
//             <Link to="/#aboutus">ABOUT US</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ handleAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[rgb(215,212,215)]">
      <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img className="h-30" src="logo.png" alt="Logo BbyB" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm cursor-pointer text-red-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-12 mt-4 md:mt-0 text-2xl font-bold">
            <li className="text-red-700 text-4xl cursor-pointer hover:text-red-500 transition">
              <Link to="/">HOME</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition">
              <Link to="/Blog">BLOGS</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition">
              <Link to="/Services">SERVICES</Link>
            </li>
            <li
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={handleAboutClick}
            >
              <Link to="/#aboutus">ABOUT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
