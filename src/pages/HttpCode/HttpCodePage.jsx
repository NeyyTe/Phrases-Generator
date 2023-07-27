// import React, {useState, useEffect} from 'react'
// import './httpCodePage.css'
// import { useParams } from 'react-router-dom';

// function HttpCode() {
//   const { http_code } = useParams();
//   const [excuses, setExcuses] = useState([]);
//   const [excuse, setExcuse] = useState('');

//   useEffect(() => {
    
//     fetch('http://localhost:5000/excuses')
//       .then((res) => res.json())
//       .then((data) => setExcuses(data))
      
//       .catch((err) => console.error('Erreur de récupération des excuses', err));
//   }, []);
//   console.log(excuses)
//   useEffect(() => {
//     console.log(http_code)
//     if (http_code) { 
//       const foundExcuse = excuses.find((excuse) => excuse.http_code === parseInt(http_code));
//       if (foundExcuse) {
//         setExcuse(foundExcuse.message);
//       } 
//     } else {
//       setExcuse('Paramètre http_code non défini');
//     }
//   }, [excuses, http_code]);

 

//   return (
//     <div className="http_code">
//       <h1>Code http Excuses n°{http_code}</h1>
//       <p>{excuse}</p>
//     </div>
//   )
// }



// export default HttpCode


import React, { useState, useEffect } from 'react';
import './httpCodePage.css';
import { useParams, Navigate } from 'react-router-dom';

function HttpCode() {
  const { http_code } = useParams();
  const [excuses, setExcuses] = useState([]);
  const [excuse, setExcuse] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/excuses')
      .then((res) => res.json())
      .then((data) => setExcuses(data))
      .catch((err) => console.error('Erreur de récupération des excuses', err));
  }, []);

  useEffect(() => {
    if (http_code) {
      const foundExcuse = excuses.find((excuse) => excuse.http_code === parseInt(http_code));
      if (foundExcuse) {
        setExcuse(foundExcuse.message);
      } else {
        // Redirigez vers la page 404 si le code http n'est pas valide
        setExcuse('');
      }
    } else {
      // Redirigez vers la page 404 si le code http n'est pas défini
      setExcuse('Paramètre http_code non défini');
    }
  }, [excuses, http_code]);

  if (!http_code || !excuse) {
    // Redirigez vers la page NotFoundPage si le code http n'est pas valide ou n'est pas défini
    return <Navigate to="/NotFoundPage" />;
  }

  return (
    <div className="http_code">
      <h1>Code http Excuses n°{http_code}</h1>
      <p>{excuse}</p>
    </div>
  );
}

export default HttpCode;
