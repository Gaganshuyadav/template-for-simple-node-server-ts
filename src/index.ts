import express from  'express';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(`get request coming... on "/" `)
  res.send('Hello from Nodejs Server!! 😁');
});

app.get('/health', (req, res) => {
  console.log("health check done")
  res.send('Everything is good here 💪');
});

app.get("/gaganshu", ( req, res)=>{
  console.log("req for gagan");
  const { name}:{name?:string} = req.query;
  const yourName = name ? name : "Server Creator 😎";
  res.send(`Hello, I am ${yourName} `);
})

app.use(( req, res)=>{
  console.log("default path");
  res.json("you got a gift, 🧸!!");
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
