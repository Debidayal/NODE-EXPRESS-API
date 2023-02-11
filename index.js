import bodyParser from "body-parser";
import express from "express";
import './db/conn.js';
import userRoutes from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes );

app.get('/', (req,res) => es.send('Hello from Homepage!'));

app.listen(PORT, ()=> {console.log(`Server Running on port: http://localhost:${PORT}`)});

