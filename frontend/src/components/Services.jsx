import React from 'react'
import { FaVideo } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";

const Services = () => {
  return (
    <div className='mt-10 md:mt-16 flex flex-col items-center justify-center gap-2'>
        <p className='text-center text-secondary font-medium text-sm sm:text-base'>Comprehensive Healthcare</p>
        <p className='text-xl sm:text-2xl md:text-3xl text-center mt-2 font-semibold'>Our Medical Health Services</p>

        <div className='p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center'>
            <div className='rounded-lg py-2 px-6 shadow-lg text-left hover:scale-105 transition-all cursor-pointer hover:bg-primary hover:text-white group'>
                <FaVideo className='text-primary group-hover:text-white'/>
                <p className='text-gray-800 font-semibold mt-2 group-hover:text-black'>Consult a doctor</p>
                <p className=' text-gray-500 text-sm mt-2 group-hover:text-white'>Need medical advice? Our experienced doctors are here to provide personalized consultations, answer your health concerns. Get expert care anytime, anywhere, anyday, just for you</p>
                <button className='px-8 py-2 bg-primary text-white rounded-full mt-6 cursor-pointer text-sm group-hover:bg-white group-hover:text-primary hover:scale-105 transition-all ' >Find a doctor</button>
            </div>

            <div className='rounded-lg py-2 px-6 shadow-lg text-left hover:scale-105 transition-all cursor-pointer hover:bg-primary hover:text-white group'>
                <FaCalendarCheck className='text-primary group-hover:text-white'/>
                <p className='text-gray-800 font-semibold mt-2 group-hover:text-black'>Set Appointment</p>
                <p className=' text-gray-500 text-sm mt-2 group-hover:text-white'>Easily schedule your appointments with top healthcare professionals. Choose a time that suits you and get the care you need without the wait. Your health, your schedule—book now!</p>
                <button className='px-8 py-2 bg-primary text-white rounded-full mt-6 cursor-pointer text-sm group-hover:bg-white group-hover:text-primary hover:scale-105 transition-all ' >Book Appointmet</button>
            </div>
            
           <div className='rounded-lg py-2 px-6 shadow-lg text-left hover:scale-105 transition-all cursor-pointer hover:bg-primary hover:text-white group'>
                
                <FaTooth className='text-primary group-hover:text-white'/>
                <p className='text-gray-800 font-semibold mt-2 group-hover:text-black'>Find a dentist</p>
                <p className=' text-gray-500 text-sm mt-2 group-hover:text-white'>Easily schedule your appointments with top dental care professionals. Choose a time that suits you and get the care you need without the wait. Your health, your schedule—find now!</p>
                <button className='px-8 py-2 bg-primary text-white rounded-full mt-6 cursor-pointer text-sm group-hover:bg-white group-hover:text-primary hover:scale-105 transition-all ' >Find a dentist</button>
            </div>

            <div className='rounded-lg py-2 px-6 shadow-lg text-left hover:scale-105 transition-all cursor-pointer hover:bg-primary hover:text-white group'>
                <FaMicroscope className='text-primary group-hover:text-white'/>
                <p className='text-gray-800 font-semibold mt-2 group-hover:text-black'>Lab Services</p>
                <p className=' text-gray-500 text-sm mt-2 group-hover:text-white'>Get accurate and timely lab tests with ease. From routine screenings to specialized diagnostics, our trusted lab services help you stay on top of your health.Book your test now!</p>
                <button className='px-8 py-2 bg-primary text-white rounded-full mt-6 cursor-pointer text-sm group-hover:bg-white group-hover:text-primary hover:scale-105 transition-all ' >Find Scientist</button>
            </div>


            

                        
        </div>
    </div>
  )
}

export default Services