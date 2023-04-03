import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, orderBy,query } from "firebase/firestore";
import "../styles/Leaderboard.css"
function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [position, setPosition] = useState(1)
  async function getLeaderboardData() {
    
    try {
      const querySnapshot = await getDocs(query(collection(db, "leaderboard")),orderBy('time_seconds','asc'));
      const data = [];
      querySnapshot.forEach((doc) => {
        const timestamp = doc.data().createdAt;
        const date = timestamp.toDate();
        const dateString = date.toLocaleString();
        data.push({ ...doc.data(), timestamp: dateString });
      });

      data.sort((a,b)=>a.time_seconds - b.time_seconds)
      console.log(data)
      setLeaderboardData(data);

    } catch (error) {
      console.error("Error fetching leaderboard data: ", error);
    }
  }  


  useEffect(() => {
    getLeaderboardData()

  }, []);


  return (
    <div className="leaderboard-wrapper">

      <div className="winners-title">Check the winners leaderboard here!</div>
      <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        
        {leaderboardData.map((user,index)=>(

          <tr key={index}>
          <td className="user">{index+1}</td>  
          <td className="user">{user.name}</td>
          <td className="user">{user.time_minutes}</td>
          <td className="user">{user.timestamp}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}

export default Leaderboard;
