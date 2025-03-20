import React from 'react'
import HeroSection from '../components/HeroSection'
import Solution from '../components/Solution'
import Services from '../components/Services'
import About from '../components/About'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Solution/>
      <Services/>
      <About/>
      <FAQ/>
    </div>
  )
}

export default Home