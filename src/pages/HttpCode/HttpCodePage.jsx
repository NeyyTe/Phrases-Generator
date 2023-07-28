import React, { useState, useEffect } from 'react';
import './httpCodePage.css';
import { useParams, useNavigate } from 'react-router-dom';

function HttpCodePage() {
  const { http_code } = useParams();
  const [excuses, setExcuses] = useState([]);
  const [excuse, setExcuse] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/excuses')
      .then((res) => res.json())
      .then((data) => {
        setExcuses(data);
       
        const foundExcuse = data.find((excuse) => excuse.http_code === parseInt(http_code));
        if (foundExcuse) {
          setExcuse(foundExcuse.message);
        } else {
       
          navigate('*');
        }
      })
      .catch((err) => console.error('Erreur ', err));
  }, [http_code,excuses,navigate]);

  return (
    <div className="http_code">
      <h1>Code http Excuses n°{http_code}</h1>
      <p>{excuse}</p>
    </div>
  );
}

export default HttpCodePage;