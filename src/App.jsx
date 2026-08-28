import React from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Blogs from './components/Blogs'
import Filter from './components/Filter'
import NewBlog from './components/NewBlog'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Offers/>
      <Blogs/>
      <Filter/>
      <NewBlog/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
