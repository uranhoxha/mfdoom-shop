import React from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar-container">
     <header className="section-padding">
        <div className="logo-image">
          <img src={logo} />
        </div>
        <nav ref={navRef}>
          <Link to="home" smooth={true} duration={500} onClick={showNavbar}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={showNavbar}>
            About
          </Link>
          <Link to="shop" smooth={true} duration={500} onClick={showNavbar}>
            Shop
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={showNavbar}>
            Contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </header>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
