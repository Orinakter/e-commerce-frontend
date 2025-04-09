"use client";

import Image from 'next/image';


function Banner() {
  return (
    <>
      {/* Main Banner Section */}
      <div className="w-full mt-16 flex flex-col lg:flex-row items-center justify-between px-5 gap-6 md:gap-10 bg-[#A19ADF] py-10 px-11">
        {/* Left Side Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Discover a Better Tomorrow
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Join us in making a difference with impactful initiatives and thoughtful solutions.
            Empower communities, build hope, and take the first step toward a brighter future.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2">
          <Image
            src="/banner.png"
            alt="Banner Image"
            width={800}
            height={800}
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
