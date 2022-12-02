import express from 'express';
import { userRouter } from './routers/users/';

const app = express();
app.use(express.json());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.use('/users', userRouter);

app.listen(5000, () => console.log('Server is running 🚀'));
