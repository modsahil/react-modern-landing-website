import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import MyAccordian from './components/accordian/MyAccordian'


export const Home = () => {
  return (
    <div>
    < Header />
    < Projects />
    < Testimonials />
    < MyAccordian />
</div>
  )
}

export default Home
