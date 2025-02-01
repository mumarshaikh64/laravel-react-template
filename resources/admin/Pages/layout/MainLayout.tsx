import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <div className='w-full flex bg-[#f8f9f9]'>
      <div className='w-[18%]  bg-[#fff] h-[100vh]' >
        <SideBar />
      </div>
      <div className='w-[82%]'>
        <Header />
        <div className='rounded'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout