'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { IoLogoDesignernews } from 'react-icons/io'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function Page() {
  return (
    <div className='container mx-auto'>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2 my-4 border-2 rounded-3xl"
      >
        <FaArrowLeft /> Back to Home
      </Link>
      {/* Banner and description section  */}
      <div>
        <Image
          src="/about1.webp"
          alt="A green plant"
          width={1200}
          height={200}
          className="w-full h-auto  object-cover"
        />
        <div className=' max-w-4xl mx-auto text-center my-5 space-y-2'>
          <h2 className='text-2xl font-semibold text-gray-700'>Welcome to Esther!</h2>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima consequuntur nulla voluptate sunt accusamus error dolores laboriosam facere, et saepe, velit incidunt doloremque ab eius. Explicabo magnam iure et.</p>
        </div>
      </div>

      {/* Why chose us section */}
      <section className=' mt-20 '>
        <h2 className='text-2xl font-semibold text-center'>Why Chose Us?</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl '>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>

        </div>
      </section>

      {/* what we do section */}
      <section className="mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/whatcanwedo.jpg"
              alt="What Can We Do?"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">What Can We Do?</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error porro nam dolores corporis...
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/ourmission.jpg"
              alt="Our Mission"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error porro nam dolores corporis...
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center ">
            <Image
              src="/history.jpg"
              alt="History Of Us"
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">History Of Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error porro nam dolores corporis...
            </p>
          </div>
        </div>
      </section>

      {/* Our Customer says section */}
      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full">
              <div className="p-4 border rounded-lg text-center space-y-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo provident in dolorum! Quibusdam nobis, nisi quis nemo repudiandae non laudantium blanditiis error? Voluptates unde illo animi. Culpa quis ut ab!</p>
                <div className='flex flex-col justify-center items-center'>
                  <Image src='/elon.jpeg' alt='image' width={200} height={50} className='w-24 h-28 rounded-full'></Image>
                </div>
                <h2>Elon Musk</h2>
                <p>CEO Tesla</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>



    </div>
  )
}

export default Page
