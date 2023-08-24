import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'



const Layout = () => {
  return (<>
    <Navbar />

    <div className='mt-6'>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout