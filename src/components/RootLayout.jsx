import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Navbar1.jsx'

// import Navbar from './Navbar.jsx'
import NeuralNetworkBackground from './NeuralNetworkBackground.jsx'


function RootLayout() {
  return (
    <div>
      <div className="relative">
        <NeuralNetworkBackground />
        <div className="relative z-10">
          {/* Your website content goes here */}

          
          
            <Navbar1 />
          

          {/* <div className=" text-white flex justify-center items-center py-4" style={{ height: "9vh", background: "transparent" }}> </div> */}

          <div className="" style={{ height: "100vh" }}>
            <Outlet />
          </div>

          



          {/* <main>Main content</main> */}
        </div>
       
      </div>
    </div>
  )
}

export default RootLayout