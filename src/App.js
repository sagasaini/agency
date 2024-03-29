import React from 'react'
import MainLayout from './component/MainLayout'
import CardCarousel from './component/CardCarousel'
import Services from './component/Services'
import CompleteSolution from './component/CompleteSolution'
import HeroSection from './component/HeroSection'
import Icons from './component/Icons'
import Contact from './component/ContactForm'
import Offices from './component/Offices'
import Faqs from './component/Faqs'
import Footer from './component/Footer'
import Testimonials from './component/Testimonials'
import ValuesSection from './component/ValuesSection'
import Reviews from './component/Reviews'
import TrandingSlider from './component/TrandingSlider'
import SEOCard from './component/SeoCard'
import StickyHeader from './component/StickyHeader'
import Header from './component/Header'
import Portfolio from './component/Portfolio'
import GraphComponent from './component/GraphComponent'

const App = () => {
  return (
    <div>
    <Header />
      <MainLayout />
<TrandingSlider/>
      {/* <CardCarousel /> */}
      <StickyHeader/>
      <Services />
      <CompleteSolution />
      <HeroSection />
      <ValuesSection />
      {/* <Testimonials /> */}
      <Portfolio />
      {/* <SEOCard/> */}
      <GraphComponent />
      <Reviews/>
      <Icons />
      <Contact />
      <Offices />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App