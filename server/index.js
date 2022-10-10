import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routes/Users.js'
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors());


app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server runnin' on port ${PORT}`);
})

