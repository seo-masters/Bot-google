import 'dotenv/config';
import express from 'express';

import v1router from "./v1/routes/index.js";
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('src/public'));


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(express.json())
app.use("/api/v1",v1router);

app.listen(port, () => {
  console.log(`Servidor corriendo en url http://localhost:${port}`);
})

