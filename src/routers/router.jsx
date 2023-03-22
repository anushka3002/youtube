import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../component/homepage'
import History from '../component/Library/history'
import Library from '../component/Library/library'
import Navbar from '../component/navbar'
import Searchpage from '../component/searchpage'
import Shorts from '../component/shorts'
import Videopage from '../component/videopage'

const Router = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/videopage' element={<Videopage/>}></Route>
        <Route exact path='/searchpage' element={<Searchpage/>}></Route>
        <Route exact path='/library' element={<Library/>}></Route>
        <Route exact path='/history' element={<History/>}></Route>
        <Route exact path='/shorts' element={<Shorts/>}></Route>
    </Routes>
    </>
  )
}

export default Router