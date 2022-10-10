import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5000, () => {
    console.log(`Server runnin' on port 5000`);
})


