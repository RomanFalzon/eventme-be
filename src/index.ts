import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import buildConfig from './utils/buildconfig';

// Load environment variables
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const app = express();
const PORT = process.env.PORT || 3000;

// Use Morgan for logging
app.use(morgan('dev')); // 'dev' is a pre-defined format

app.use(cors());

app.get('/config', buildConfig);

app.get('/api/users', (request, response, next) => {});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
