import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <Navbar />
    </header>
  );
};

export default Header;