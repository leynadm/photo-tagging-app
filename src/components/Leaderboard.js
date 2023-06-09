import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import "../styles/Leaderboard.css";
function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [leaderboardFindTheZWarrior, setLeaderboardFindTheZWarrior] = useState(
    []
  );

  async function getLeaderboardData() {
    const leaderboardsArr = ["leaderboard", "leaderboardfindthezwarrior"];

    for (let index = 0; index < leaderboardsArr.length; index++) {
      const leaderboardToUse = leaderboardsArr[index];

      try {
        const querySnapshot = await getDocs(
          query(collection(db, leaderboardToUse)),
          orderBy("time_seconds", "asc")
        );
        const data = [];
        querySnapshot.forEach((doc) => {
          const timestamp = doc.data().createdAt;
          const date = timestamp.toDate();
          const dateString = date.toLocaleString();
          data.push({ ...doc.data(), timestamp: dateString });
        });

        data.sort((a, b) => a.time_seconds - b.time_seconds);
        console.log(data);
        if (index === 0) {
          setLeaderboardData(data);
        } else {
          setLeaderboardFindTheZWarrior(data);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
      }
    }
  }

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-wrapper">
      <div className="winners-title">Check the winners leaderboard here!</div>

      <table>
        <tr className="table-header-column-names">
          <th>Position</th>
          <th>Player Name</th>
          <th>mm:ss:ms</th>
          <th>Date</th>
        </tr>
        <thead>
          <tr>
            <td className="table-header" colspan="4">
              Label All Z Warriors!
            </td>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td className="user">{index + 1}</td>
              <td className="user">{user.name}</td>
              <td className="user">{user.time_minutes}</td>
              <td className="user">{user.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
      <tr className="table-header-column-names">
          <th>Position</th>
          <th>Player Name</th>
          <th>mm:ss:ms</th>
          <th>Date</th>
        </tr>
        <thead>
          <tr>
            <td className="table-header" colspan="4">
              Find The Z Warrior!
            </td>
          </tr>
        </thead>
        <tbody>
          {leaderboardFindTheZWarrior.map((user, index) => (
            <tr key={index}>
              <td className="user">{index + 1}</td>
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
