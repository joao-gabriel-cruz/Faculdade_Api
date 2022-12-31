import express from 'express';
import { router } from './routers';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.json());

app.get('/', (_, response) => {
  response.send('Hello World');
});

app.use('/api', router);

app.listen(port, () => console.log(`Server is running 🚀${port}`));
