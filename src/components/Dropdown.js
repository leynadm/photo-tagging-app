import React, { useState, useEffect } from "react";
import "../styles/Dropdown.css";
import firebase from "../config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../config/firebase";

const Dropdown = ({ clickPosition, zWarriorId }) => {
  const style = {
    position: "absolute",
    left: `${clickPosition.x}px`,
    top: `${clickPosition.y}px`,
  };

  async function submitData(selectedValue, zWarriorId) {
    const pullDocRef = doc(db, "coordinates", selectedValue);
    const docSnap = await getDoc(pullDocRef);

    if (docSnap.exists()) {

      if (docSnap.data().id === zWarriorId) {
        console.log("selection was correct");
      } else {
        console.log("selection was incorrect");
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    const docRef = await addDoc(collection(db, "user-selection"), {
      value: selectedValue,
      coords: zWarriorId,
      createdAt: serverTimestamp()
    });
  }

  return (
    <div style={style} className="dropdown">
      <ul>
        <li>
          <button
            type="button"
            onClick={() => submitData("songoku", zWarriorId)}
          >
            Son Goku
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => submitData("kingcold", zWarriorId)}
          >
            King Cold
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => submitData("saibaman", zWarriorId)}
          >
            Saibaman
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
