import React from 'react';
import {
  Link
} from 'react-router-dom';
import Home from '../pages/Home';

function Header() {
  return (
    <>
      <div>HEADERRRRR</div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/aboutus">About Us</Link>

        <Link to="/contactus">Contact us</Link>
        <Home />
      </nav>

    </>
  );
}

export default Header;
