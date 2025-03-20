import React from 'react'
import doc from '../assets/about.jpg'
import { GrTechnology } from "react-icons/gr";
import { GiFlowerPot } from "react-icons/gi";

const About = () => {
  return (
    <div className="mt-10 md:mt-16 flex flex-col items-center justify-center gap-2">
  {/* Section Header */}
  <div className="flex justify-center flex-row gap-2 items-start px-4 min-w-48">
    <hr className="h-0.5 m-auto bg-secondary w-1/4 border-none outline-none" />
    <p className="text-center text-secondary font-medium text-sm sm:text-base">Why choose us</p>
  </div>
  <p className="text-xl sm:text-2xl md:text-3xl text-center mt-2 font-semibold">About Us</p>

 
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
    {/* Left Side - Image */}
    <div className="md:w-1/2">
      <img src={doc} alt="Doctor" className="w-full h-auto object-cover rounded-lg" />
    </div>

    {/* Right Side - Text */}
    <div className="md:w-1/2 flex flex-col items-right">
      <p className="text-sm md:text-lg">At DocOnCall, we are committed to revolutionizing healthcare through technology. As one of the fastest-growing telemedicine platforms, we connect patients with trusted doctors, providing seamless consultations, lab services, dental care, and nutritionist support—all from the comfort of your home.
      </p>


      <div className='flex gap-4 mt-6 '>
        <div className='flex flex-row gap-2 items-right shadow-lg p-4'>
        <GrTechnology className='text-primary text-xl ' />
        <p className='text-gray-500 '>High Tech Equipment</p>
        </div>

        <div className='flex flex-row gap-2 items-right shadow-lg p-4'>
        <GiFlowerPot className='text-primary text-xl '/>
        <p className='text-gray-500 '>Eco Frienly Environment</p>
        </div>
        </div>
          <div className='text-left mt-6'>
              <button className='px-8 py-2 rounded-full border border-primary text-primary hover:scale-105 transition all hover:cursor-pointer'>Learn More</button>
          </div>
        
    </div>
  </div>
</div>

  )
}

export default About