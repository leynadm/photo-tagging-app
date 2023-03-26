import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
         <header>
        <nav ref={navRef}>
          <Link to="/">
            Home
          </Link>
          <Link to="about">
            About
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          </button>
          </nav>        
        <button className="nav-btn" onClick={showNavbar}>
        </button>

      </header>
    </div>
  );
}

export default Navbar;