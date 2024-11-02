import cors from 'cors';
import express from 'express';
import emailRouter from './routes/emailRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', emailRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});