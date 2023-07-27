import React, {useState, useEffect} from 'react'
import './httpCodePage.css'
import { useParams } from 'react-router-dom';

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
  console.log(excuses)
  useEffect(() => {
    console.log(http_code)
    if (http_code) { // Vérifiez si le paramètre http_code est défini
      const foundExcuse = excuses.find((excuse) => excuse.http_code === parseInt(http_code));
      if (foundExcuse) {
        setExcuse(foundExcuse.message);
      } else {
        setExcuse('Aucune excuse trouvée');
      }
    } else {
      setExcuse('Paramètre http_code non défini');
    }
  }, [excuses, http_code]);

  return (
    <div className="http_code">
      <h1>Code http Excuses {http_code}</h1>
      <p>{excuse}</p>
    </div>
  )
}



export default HttpCode