import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import UsersRoutes from './routes/Users.js';
import AnnoucementsRoutes from './routes/Annoucements.js';
import MessageRoutes from './routes/Messages.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { userAuth } from './middleware/userAuth.js';
import { signupUser } from './controllers/usersController.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

mongoose.connect(`mongodb+srv://root1:${process.env.DATABASE_PASSWORD}@twojekorki.v642pqe.mongodb.net/?retryWrites=true&w=majority`);


app.use('/users', UsersRoutes);
app.use('/annoucements', AnnoucementsRoutes)
app.use('/messages', MessageRoutes)


app.listen(PORT, () => {
    console.log(`Server runnin' on port ${PORT}`);
})

