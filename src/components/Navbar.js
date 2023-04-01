import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Timer from "./Timer";

function Navbar({ gameLoaded, seconds, setSeconds }) {
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
          <Link to="leaderboard">Leaderboard</Link>
        </nav>
        <div>
          {gameLoaded && (
            <Timer start={true} seconds={seconds} setSeconds={setSeconds} />
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
