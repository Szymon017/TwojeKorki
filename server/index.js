import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server runnin' on port ${PORT}`);
})


