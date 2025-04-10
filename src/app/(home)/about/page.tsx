'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { IoLogoDesignernews } from 'react-icons/io'

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
          <div className='text-center space-y-2 px-4 py-8 rounded-xl shadow-xl'>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl shadow-xl'>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>
          <div className='text-center space-y-2 px-4 py-8 rounded-xl shadow-xl'>
            <div className='flex justify-center items-center'>
              <IoLogoDesignernews size={50} />
            </div>
            <h2 className=' font-semibold'>Creative design</h2>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur incidunt tempore </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Page
