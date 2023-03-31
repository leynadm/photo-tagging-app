import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Timer from "./Timer";

function Navbar({gameLoaded}) {
  
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </nav>
        <div>{gameLoaded && <Timer start={true}/>}</div>
      </header>
    </div>
  );
}

export default Navbar;
