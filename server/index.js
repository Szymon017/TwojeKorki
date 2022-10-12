import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import usersRoutes from './routes/Users.js'
import mongoose, { mongo } from 'mongoose';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
mongoose.connect(`mongodb+srv://root1:${process.env.DATABASE_PASSWORD}@twojekorki.v642pqe.mongodb.net/?retryWrites=true&w=majority`);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server runnin' on port ${PORT}`);
})

