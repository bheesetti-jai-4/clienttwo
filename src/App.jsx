import React from 'react'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Link, Route, Router, Routes  } from "react-router-dom";
import Home from './home/Home';
import NotFound from './NotFound';
import DoctorProfile from './profile/DoctorProfile';
import Services from './service/Services';
import GalaryCard from './galary/GalaryCard';
import Maps from './home/Maps';
import TestList from './testimonials/TestList';
// import Testimonial from './testimonials/Testimonials';
// import TestList from './testimonials/TestList';


function App() {
  return (
  
    <BrowserRouter>

    <Navbar/> 

    {/* links to display  */}
    {/* <Link to={"/home"} > home </Link> */}
    

    <Routes>
    <Route  path={"*"} element={<NotFound/>} />
      <Route  path={"/"} element={<Home/>} />
      <Route  path={"/home"} element={<Home/>} />
      <Route  path={"/aboutme"} element={<DoctorProfile/>} />
      <Route  path={"/service"} element={<Services/>} />
      <Route  path={"/address"} element={<Maps/>} />
      {/* <Route  path={"/testmonial"} element={<Testimonial/>} /> */}
      <Route  path={"/testmonial"} element={<TestList/>} />
      <Route  path={"/galary"} element={<GalaryCard/>} />
    </Routes >
      
      </BrowserRouter>
  
  )
}

export default App