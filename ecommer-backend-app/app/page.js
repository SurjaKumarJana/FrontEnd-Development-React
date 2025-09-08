"use client"

import Navbar from '@/Component/Navbar'
import React from 'react'
import MainCarosal from '@/Component/MainCarosal'
import HomeSectionCarosal from '@/Component/HomeSectionCarosal' 



const page = () => {
  return (
    <>
      <Navbar />
      <MainCarosal />
      <div className='border-2'>
        <h3 className='w-full h-10  bg-amber-100 font-bold text-center'>Treading now...</h3>
        <HomeSectionCarosal />
      </div>

      <div>
        <h3 className='w-full h-10  bg-amber-100 font-bold text-center'>Men's Choice...</h3>
        <HomeSectionCarosal />
      </div>

      <div>
        <h3 className='w-full h-10  bg-amber-100 font-bold text-center'>10% off ...</h3>
        <HomeSectionCarosal />
      </div>

      <div>
        <h3 className='w-full h-10  bg-amber-100 font-bold text-center'>Today's special  sale...</h3>
        <HomeSectionCarosal />
      </div>

      <div>this is body</div>

    </>
  )
}

export default page