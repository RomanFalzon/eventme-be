import dotenv from 'dotenv';
import express from 'express';

// Load environment variables
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Running in  ${process.env.NODE_ENV} mode!`);
});

app.get('/api/users', (request, response, next) => {
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
