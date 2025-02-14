import express from 'express';
import cors from 'cors';

import router from './routes/index.js';

const PORT = 3001;

const app = express();

app.use(cors());

app.set('base', '/api/v1');
app.use('/api/v1', router);

app.use((_req, res, _next) => {
    res.status(404).json("Couldn't find that resource");
});

app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).send('Unhandled exception in backend. Please contact support.');
});

app.listen(PORT, () => {
    console.log(`Reversed backend listening on port ${PORT}`);
});
