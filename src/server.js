import express from 'express';
import contacts from './services/contacts.js';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.get('/api/products', (req, res) => {
  res.json([]);
});

app.get('/api/contacts', (req, res) => {
  // const dataBaseResponse = null;
  // res.send(dataBaseResponse);
  // res.json(dataBaseResponse);
  res.json(contacts);
});

app.listen(3000, () => console.log(`Server is running on port ${PORT}`));
