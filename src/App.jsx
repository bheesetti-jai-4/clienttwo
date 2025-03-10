// import React from 'react'
// import { BrowserRouter, Link, Route, Router, Routes  } from "react-router-dom";
// import Home from './home/Home';
// import NotFound from './NotFound';
// import DoctorProfile from './profile/DoctorProfile';
// import Services from './service/Services';
// import GalaryCard from './galary/GalaryCard';
// import Maps from './home/Maps';
// import TestList from './testimonials/TestList';
// import Navbar from './navbar/Navbar'


// function App() {
//   return (
  
//     <BrowserRouter>

//     <Navbar/> 

//     {/* links to display  */}
//     {/* <Link to={"/home"} > home </Link> */}
    

//     <Routes>
//     <Route  path={"*"} element={<NotFound/>} />
//       <Route  path={"/"} element={<Home/>} />
//       <Route  path={"/home"} element={<Home/>} />
//       <Route  path={"/aboutme"} element={<DoctorProfile/>} />
//       <Route  path={"/service"} element={<Services/>} />
//       <Route  path={"/address"} element={<Maps/>} />
//       {/* <Route  path={"/testmonial"} element={<Testimonial/>} /> */}
//       <Route  path={"/testmonial"} element={<TestList/>} />
//       <Route  path={"/galary"} element={<GalaryCard/>} />
//     </Routes >
      
//       </BrowserRouter>
  
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home/Home';
import NotFound from './NotFound';
import DoctorProfile from './profile/DoctorProfile';
import Services from './service/Services';
import GalaryCard from './galary/GalaryCard';
import Maps from './home/Maps';
import TestList from './testimonials/TestList';
import Layout from './Layout'; // Import the Layout component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap pages that should have Navbar inside a Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<DoctorProfile />} />
          <Route path="/service" element={<Services />} />
          <Route path="/address" element={<Maps />} />
          <Route path="/testmonial" element={<TestList />} />
          <Route path="/galary" element={<GalaryCard />} />
        </Route>

        {/* Not Found Page without Navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
