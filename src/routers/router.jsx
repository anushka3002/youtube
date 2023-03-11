import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../component/homepage'
import Navbar from '../component/navbar'
import Videopage from '../component/videopage'

const Router = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/videopage' element={<Videopage/>}></Route>
    </Routes>
    </>
  )
}

export default Router