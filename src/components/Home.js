import React from "react";
import Menu from "./Menu";
import "../styles/Home.css"
import Game from "./Game"
function Home(){

    return(
        <div className="home-wrapper">
           <Game/> 
        </div>
    )
}

export default Home