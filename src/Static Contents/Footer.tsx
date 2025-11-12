import { FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-[#008C99]">NEX</span>CAB
          </h1>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Experience the ease and convenience of renting a car with Novaride.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Legal Policy</h2>
          <div className="space-y-2 text-gray-400 text-sm flex flex-col">
            <Link className="hover:text-[#008C99] transition duration-300" to="/">Term & Condition</Link>
            <Link className="hover:text-[#008C99] transition duration-300" to="/about-us">Privacy Policy</Link>
            <Link className="hover:text-[#008C99] transition duration-300" to="/features">Legal Notice</Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <div className="space-y-2 text-gray-400 text-sm flex flex-col">
            <Link className="hover:text-[#008C99] transition duration-300" to="/">Home</Link>
            <Link className="hover:text-[#008C99] transition duration-300" to="/about-us">About Us</Link>
            <Link className="hover:text-[#008C99] transition duration-300" to="/features">Features</Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Subscribe To The Newsletters</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email..."
              className="w-full px-4 py-2 rounded-l-lg bg-[#1a1a1a] text-gray-300 outline-none"
            />
            <button className="bg-[#008C99] px-4 rounded-r-lg text-white text-lg">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2025 NexCab. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="p-3 rounded-full border-2 border-white hover:border-[#008C99] hover:text-[#008C99] transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="p-3 rounded-full border-2 border-white hover:border-[#008C99] hover:text-[#008C99] transition duration-300">
            <FaYoutube />
          </a>
          <a href="#" className="p-3 rounded-full border-2 border-white hover:border-[#008C99] hover:text-[#008C99] transition duration-300">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
