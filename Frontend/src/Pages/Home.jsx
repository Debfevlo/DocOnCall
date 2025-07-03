import React from 'react'
import Hero from '../Components/Hero'
import ProcessGrid from '../Components/ProcessGrid';
import AboutSection from '../Components/AboutSection';
import Service from '../Components/Service';



const Home = () => {
  
  return (
    <div>
      
     <Hero />
     <ProcessGrid/>
     <AboutSection/>
     <Service/>
    </div>
  )
}

export default Home