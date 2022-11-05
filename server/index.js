import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routes/Users.js';
import AnnoucementsRoutes from './routes/Annoucements.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
mongoose.connect(`mongodb+srv://root1:${process.env.DATABASE_PASSWORD}@twojekorki.v642pqe.mongodb.net/?retryWrites=true&w=majority`);


app.use('/users', usersRoutes);
app.use('/annoucements', AnnoucementsRoutes)

app.listen(PORT, () => {
    console.log(`Server runnin' on port ${PORT}`);
})

