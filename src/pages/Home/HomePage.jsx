import React, { useState, useEffect } from "react";
import "./homepage.css";
import Header from "../../components/Header.jsx";

export default function HomePage() {
  const [excuses, setExcuses] = useState([]);
  const [existingExcuse, setExistingExcuse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/excuses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExcuses(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des excuses:", error)
      );
  }, []);

  const genereExcuse = () => {
    setIsLoading(true); 

    const loadingTime = Math.floor(Math.random() * 5000) + 1000;

    setTimeout(() => {
      const randomExcuse = Math.floor(Math.random() * excuses.length);
      console.log("RandomExcuse", randomExcuse);
      setExistingExcuse(excuses[randomExcuse]?.message || "");
      console.log("existingExcuse", existingExcuse);
      setIsLoading(false); 
    }, loadingTime);
  };

  useEffect(() => {
    if (excuses.length > 0) {
      genereExcuse();
    }
  }, [excuses]);

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Les excuses de Dev</h1>
        {isLoading ? (
          <p className="p_and_button">Chargement...</p>
        ) : (
          <p className="p_and_button">{existingExcuse}</p> 
        )}
        <button className="p_and_button " onClick={genereExcuse}>
          Appuyez ici pour générer une excuse
        </button>
      </div>
    </>
  );
}



