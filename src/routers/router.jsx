import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../component/homepage'
import Navbar from '../component/navbar'
import Searchpage from '../component/searchpage'
import Videopage from '../component/videopage'

const Router = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/videopage' element={<Videopage/>}></Route>
        <Route exact path='/searchpage' element={<Searchpage/>}></Route>
    </Routes>
    </>
  )
}

export default Router