import React from "react";
import "../styles/WarriorToGuess.css"
function WarriorToGuess({findWarrior,findWarriorVisibility}){

    return(
        <div className={findWarriorVisibility}>
            <div>
                {findWarrior}
            </div>
        </div>
    )

}

export default WarriorToGuess