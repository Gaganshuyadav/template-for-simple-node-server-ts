import express from  'express';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nodejs Server!!');
});

app.get('/health', (req, res) => {
  res.send('Everything is good here');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
