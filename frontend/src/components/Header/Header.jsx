import React from 'react';
import {
  Link
} from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <div>HEADERRRRR</div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/aboutus">About Us</Link>

        <Link to="/contactus">Contact us</Link>

      </nav>

    </header>
  );
}

export default Header;
