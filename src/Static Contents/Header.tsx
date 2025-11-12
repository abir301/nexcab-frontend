import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-50 bg-white drop-shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-3">
        <div className="">
          <img className="w-20" src="/public/images/nexcab.png" alt="NexCab Logo" />
        </div>

        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <div className="hidden md:flex gap-10">
          <NavLink
            className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
            to='/about-us'
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
            to='/features'
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
            to='/contact'
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
            to='/faq'
          >
            FAQ
          </NavLink>
        </div>

        <div className="hidden md:flex gap-3">
          <NavLink to="/login">
            <button className="font-medium border-[2px] border-[#008C99] bg-[#008C99] text-white px-3 py-2 rounded-lg">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="font-medium border-[2px] border-[#008C99] text-[#008C99] px-3 py-2 rounded-lg">
              Register
            </button>
          </NavLink>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white drop-shadow-lg flex flex-col items-center gap-5 py-4">
            <NavLink
              className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
              to='/'
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
              to='/about-us'
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
              to='/features'
              onClick={() => setMenuOpen(false)}
            >
              Features
            </NavLink>
            <NavLink
              className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
              to='/contact'
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) => `font-medium transition-colors duration-300 ${isActive ? 'text-[#008C99]' : 'text-black hover:text-[#008C99]'}`}
              to='/faq'
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </NavLink>

            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="font-medium border-[2px] border-[#008C99] bg-[#008C99] text-white px-3 py-2 rounded-lg">
                Login
              </button>
            </NavLink>
            <NavLink to="/register" onClick={() => setMenuOpen(false)}>
              <button className="font-medium border-[2px] border-[#008C99] text-[#008C99] px-3 py-2 rounded-lg">
                Register
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;