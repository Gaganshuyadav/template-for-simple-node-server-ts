// index.js
import express from  'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nodejs Server!');
});

app.get('/health', (req, res) => {
  res.send('Everything is good here');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
