import cors from 'cors';
import emailRouter from './routes/emailRoutes';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', emailRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});