import { MdOutlineArrowOutward } from "react-icons/md";

function Banner() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/public/images/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Looking to save more on <br /> your rental car?</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
          Whether you're planning a weekend getaway, a business trip, or just
          need a reliable ride for the day, we offers a wide range of vehicles
          to suit your needs.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#008C99] hover:bg-[#007580] text-white px-6 py-3 rounded-full font-semibold transition">
            Book A Drive
          </button>
          <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition">
            <span>Learn More</span>
            <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
