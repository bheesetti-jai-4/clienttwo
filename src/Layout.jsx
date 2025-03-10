import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the nested routes */}
    </>
  );
}

export default Layout;
