import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';

function Home() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
