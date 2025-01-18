import React from 'react'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import ContactSection from '../../components/ContactSection'

const Home = () => {
  return (
    
    <div>
        <HeroSection/>
        <Features />
        <Testimonial/>
        <FAQ/>
        <ContactSection/>
    </div>
  )
}

export default Home