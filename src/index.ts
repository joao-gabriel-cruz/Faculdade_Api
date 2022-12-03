import express from 'express';
import { userRouter } from './routers/users/';
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.json());

app.get('/', (_, response) => {
  response.send('Hello World');
});

app.use('/users', userRouter);

app.listen(port, () => console.log('Server is running 🚀'));
