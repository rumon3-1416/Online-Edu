import React from 'react';
import Navbar from './Navbar';
import NavMenu from './NavMenu';
import Welcome from './Welcome';

function Banner() {
  return (
    <div className="banner">
      <Navbar />
      <NavMenu />
      <Welcome />
    </div>
  );
}

export default Banner;
