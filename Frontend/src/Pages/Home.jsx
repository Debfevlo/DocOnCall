import React from 'react'
import Hero from '../Components/Hero'
import ProcessGrid from '../Components/ProcessGrid';
import AboutSection from '../Components/AboutSection';
import Service from '../Components/Service';
import Testimonials from '../Components/Testimonial';
import Faq from '../Components/Faq';



const Home = () => {
  
  return (
    <div>
     <Hero />
     <ProcessGrid/>
     <AboutSection/>
     <Service/>
     <Testimonials/>
     <Faq/>
    </div>
  )
}

export default Home