import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <BlogList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home