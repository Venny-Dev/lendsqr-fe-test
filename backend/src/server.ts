import fs from 'fs';
import { DB_PATH } from './db/fileDb.js';

if (!fs.existsSync(DB_PATH)) {
  console.error(`[fatal] db.json not found at ${DB_PATH}. Run npm run sync-db first.`);
  process.exit(1);
}

import cors from 'cors';
import express from 'express';
import usersRouter from './routes/users.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/', usersRouter);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
  console.log(`[backend] Server running on port ${PORT}`);
});
