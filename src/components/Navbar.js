import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Timer from "./Timer";

function Navbar({ gameLoaded, seconds, setSeconds,start, setStart }) {

  return (
    <div>
      <header>
        <nav >
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="leaderboard">Leaderboard</Link>
        </nav>
        <div>
          {gameLoaded && (
            <Timer start={start} setStart={setStart} seconds={seconds} setSeconds={setSeconds} />
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
