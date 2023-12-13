import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import TvShow from '../pages/TvShow';
const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/tv-show' element={<TvShow/>}/>
    </Routes>
  )
}

export default MyRouter