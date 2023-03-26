import React, { useState, useEffect } from "react";
import "../styles/Dropdown.css";
import firebase from "../config/firebase";
import { collection,addDoc, serverTimestamp, getDocs, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../config/firebase";

const Dropdown = ({ clickPosition, dropdownCoords }) => {
  const style = {
    position: "absolute",
    left: `${clickPosition.x}px`,
    top: `${clickPosition.y}px`,
  };
 

  async function submitData(selectedValue,dropdownCoords) {
    /* 
    const fetchData = async() => {
      const data = await getDocs(collection(db,"coordinates"));
      console.log("Firestore data:", data.docs.map((doc) => doc.data()));
    } 
     */
    
    const docRef = doc(db,"coordinates",selectedValue)
    const docSnap = await getDoc(docRef)
 
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      console.log("logging snap data coords: " + docSnap.data().coordinates)
      console.log("logging dropdown coords: " + String(dropdownCoords))

      if(docSnap.data().coordinates === dropdownCoords){
        console.log("selection was correct")
      } else {
        console.log("selection was incorrect")
      }
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }


    /* 
    const docRef = await addDoc(collection(db, "user-selection"), {
      value: selectedValue,
      coords: dropdownCoords,
      createdAt: serverTimestamp()
    });
     */
  }

  return (
    <div style={style} className="dropdown">
      <ul>
        <li>
          <button type="button" onClick={()=>submitData("songoku",dropdownCoords)}>
            Son Goku
          </button>
        </li>
        <li>
          <button type="button" onClick={()=> submitData("kingcold",dropdownCoords)}>
            King Cold
          </button>
        </li>
        <li>
          <button type="button" onClick={()=> submitData("saibaman",dropdownCoords)}>
            Saibaman
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
