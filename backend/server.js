// app.js
const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;
const data = require("./excuses.json")

app.use(cors({origin:"*",}))

app.get('/excuses', (req, res) => {
  res.json(data);
});


app.post('/excuses', (req, res) => {
  const newExcuse = req.body;
  data.push(newExcuse);
  res.json({ message: 'Excuse ajoutée avec succès !', excuse: newExcuse });
});


app.use((req, res) => {
  res.status(404).json({ message: 'Page non trouvée' });
});


app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
