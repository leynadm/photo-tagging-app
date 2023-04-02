import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import "../styles/Leaderboard.css"
function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  async function getLeaderboardData() {
    
    try {
      const querySnapshot = await getDocs(collection(db, "leaderboard"));
      const data = [];
      querySnapshot.forEach((doc) => {
        const timestamp = doc.data().createdAt;
        const date = timestamp.toDate();
        const dateString = date.toLocaleString();
        data.push({ ...doc.data(), timestamp: dateString });
      });
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
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        
        {leaderboardData.map((user)=>(
          <tr key={user.id}>
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
