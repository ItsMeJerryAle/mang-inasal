import React from 'react'
import { About, Contact, Feedback, Gallery, Header, Products, Awards, Footer } from './containers'
import './App.css';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>asdasd
        <Header/>
      </div>
      <About/>
      <Products/>
      <Feedback/>
      <Awards/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App