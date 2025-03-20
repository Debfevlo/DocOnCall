import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Doc from '../assets/group.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div>
        {/* Hero section */}
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

        {/* The left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 m-auto py-4 md:py-[8vw] md:mb-[-30px]'>
            <div className='flex justify-center flex-row gap-2 items-start  px-4 min-w-48 '>
                <hr  className='h-0.5 m-auto bg-secondary w-1/4 border-none outline-none '/>
                <p className='text-center text-secondary font-medium text-sm sm:text-base'>Why choose us </p>
            </div>
            <p className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white  '>
                Comprehensive Healthcare, <br />Just a Click Away.
            </p>
            <p className='text-sm text-white '>Book <span className='text-secondary'>doctor appointments</span>, access <span className='text-secondary'>lab services</span>, <br className='hidden md:block'/> get expert <span className='text-secondary'>dental care</span>, and consult with <span className='text-secondary'>top nutritionists</span><br />—all in one place.
            </p>

            <div>
                <button className='px-8 py-3 bg-white text-black rounded-full flex flex-row items-center justify-center gap-2 text-sm m-auto md:m-0 hover:scale-105 transition-all cursor cursor-pointer'>Book appointment <FaArrowRight /> </button>
            </div>

        </div>
        
        {/* The right side */}
        <div className='md:w-1/2 relative'>
            <img src={Doc} alt="" className='w-full md:absolute bottom-0 h-auto' />
        </div>
    </div>

    
    {/* The address and location */}
<div className='flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between p-4'>
    <div className='flex flex-row gap-2 items-center justify-center'>
        <div className='w-6 h-6 bg-white rounded-lg flex items-center justify-center m-auto '>
            <FaLocationDot className='text-primary'/>
        </div>
        <div className='min-w-60'>
            <p className='text-sm text-gray-500'>Address</p>
            <p className='text-sm text-gray-600 font-semibold'>Tamale, Dungu zogolin</p>
        </div>
    </div>

    <div className='flex flex-row gap-2 items-center justify-center  '>
        <div className='w-6 h-6 bg-white rounded-lg flex items-center justify-center m-auto '>
        <FaClock className='text-primary'/>
        </div>
        <div className='min-w-60 ' >
            <p className='text-sm text-gray-500 '>Opening Hours</p>
            <p className='text-sm text-gray-600 font-semibold'>Mon-Fri, 9:00-21:00</p>
        </div>
    </div>

    <div className='flex flex-row gap-2 items-center justify-center'>
        <div className='w-6 h-6 bg-white rounded-lg flex items-center justify-center m-auto '>
            <BsFillTelephoneFill className='text-primary' />
        </div>
        <div className='min-w-60'>
            <p className='text-sm text-gray-500'>HotLine</p>
            <p className='text-sm text-gray-600 font-semibold'>0548204046, 0249099181</p>
        </div>
    </div>
    
</div>

    </div>
  )
}

export default HeroSection