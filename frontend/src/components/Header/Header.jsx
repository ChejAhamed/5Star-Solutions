import React from 'react';
import {
  Link
} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div>HEADERRRRR</div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/aboutus">About Us</Link>

        <Link to="/contactus">Contact us</Link>

      </nav>

    </>
  );
}

export default Header;
