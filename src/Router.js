import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

export default function Router() {
  return (
    <RouterContainer>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<Navigate to={"/"} replace />}/>
      </Routes>
    </RouterContainer>
  )
}
