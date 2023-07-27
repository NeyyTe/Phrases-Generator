import React, { useState, useEffect } from "react";
import "./homepage.css";
import Header from "../../components/Header.jsx";

export default function HomePage() {
  const [excuses, setExcuses] = useState([]);
  const [existingExcuse, setExistingExcuse] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/excuses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExcuses(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des excuses:", error)
      );
  }, []);

  const genExcuse = () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    console.log("RandomIndex", randomIndex);
    setExistingExcuse(excuses[randomIndex]?.message || "");
    console.log("existingExcuse", existingExcuse);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Les excuses de Dev</h1>
        <p className="excuse">{existingExcuse}</p>
        <button className="title-button" onClick={genExcuse}>
          Générer une nouvelle excuse
        </button>
       
      </div>
    </>
  );
}
