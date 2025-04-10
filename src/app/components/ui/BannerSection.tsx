"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",

];

export const BannerSection = () => {
  return (
    <div className="w-full aspect-[16/6]  container mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Banner ${index}`}
                fill
                className="object-cover"
                priority
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

    // <section className="bg-gray-50 py-16">
    //   <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
    //     {/* Left Text Section */}
    //     <div className="lg:w-1/2 text-center lg:text-left">
    //       <p className="text-gray-600 uppercase tracking-widest mb-2">New Electric Sander</p>
    //       <h1 className="text-5xl font-bold text-gray-900 mb-4">
    //         Sander <span className="text-yellow-600">GWS</span>
    //       </h1>
    //       <p className="text-lg text-gray-700 mb-6">
    //         Lorem Ipsum Dolor Sit Amet.
    //       </p>
    //       <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-6 py-3 rounded-md shadow-md">
    //         Shopping Now
    //       </button>
    //     </div>

    //     {/* Right Image Section */}
    //     {/* <div className="lg:w-1/2 mt-10 lg:mt-0 relative"> */}
    //       <Image
    //         src="/images/image2.jpg" 
    //         alt="Electric Sander"
    //         width={800}
    //         height={500}
            
    //       />
    //     {/* </div> */}
    //   </div>
    // </section>
//   );
// };


