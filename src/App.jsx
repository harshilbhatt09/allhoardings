import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Main from './Components/Main'
import UpperFooter from './Components/UpperFooter'
import LowerFooter from './Components/LowerFooter'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Main/>
      <div className='md:hidden'>
        <UpperFooter />
      </div>
      <LowerFooter/>
    </div>
  )
}

export default App
