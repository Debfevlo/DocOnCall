import React from 'react'
import { IoTrailSignOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { RiLightbulbFlashLine } from "react-icons/ri";
 

const Solution = () => {
  return (
    <div className='mt-10 md:mt-16 flex flex-col items-center justify-center gap-2'>
        <p className='text-center text-secondary font-medium text-sm sm:text-base'>Fastest Solution</p>
        <p className='text-xl sm:text-2xl md:text-3xl text-center mt-2 font-semibold'>4 easy steps to get you solution</p>

        <div className='p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center'>
                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                    <IoTrailSignOutline className='text-3xl text-blue-300' />
                    <p className='text-gray-800 font-semibold'>Sign Up OR Sign In</p>
                    <p className=' text-gray-500'>Your health comes first. Sign in to manage your care or sign up to get started on your wellness journey. </p>
                </div>

                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                     <MdOutlineMedicalServices className='text-3xl text-orange-300'/>
                    <p className='text-gray-800 font-semibold' >Click on a service</p>
                    <p className=' text-gray-500'>Your health comes first. Click on any of the service provided base on you needs. We are always here for you </p>
                </div>

                <div className='flex flex-col gap-2  items-center justify-center p-6 cursor-pointer hover:scale-105 transition-all'>
                    <TbRibbonHealth className='text-3xl text-pink-300' />
                    <p className='text-gray-800 font-semibold' >Find Health professional</p>
                    <p className=' text-gray-500'>Your health comes first. Bowse through our numerous health care providers,reading their profile to know them</p>
                </div>

                

                <div className='flex flex-col gap-2  items-center justify-center p-6  cursor-pointer hover:scale-105 transition-all'>
                    <RiLightbulbFlashLine className='text-3xl text-red-300' />
                    <p className='text-gray-800 font-semibold'>Get Your Solution</p>
                    <p className=' text-gray-500'>Your health comes first. Book appointment, or Lab Services, or Dentist, or a Nutrionist to for your health solution</p>
                </div>
        </div>
    </div>
  )
}

export default Solution