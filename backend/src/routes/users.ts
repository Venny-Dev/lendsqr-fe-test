import { Router, Request, Response, NextFunction } from 'express';
import { readDb, writeDb } from '../db/fileDb.js';

const router = Router();

// GET /users — return all users
router.get('/users', (_req: Request, res: Response) => {
  const { users } = readDb();
  res.status(200).json({ data: users, total: users.length, message: 'OK' });
});

// GET /userDetails/:id — return a single user's full details by id
router.get('/userDetails/:id', (req: Request, res: Response, next: NextFunction) => {
  const { userDetails } = readDb();
  const user = userDetails.find((u) => String(u.id) === req.params.id);

  if (!user) {
    const err: any = new Error(`User with id '${req.params.id}' not found`);
    err.status = 404;
    return next(err);
  }

  res.status(200).json({ data: user, message: 'OK' });
});

// PUT /users/:id — update a user by id
router.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  // Validate body is a non-null plain object (not null, not array)
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    const err: any = new Error('Request body must be a non-null object');
    err.status = 400;
    err.errors = ['body is null or not an object'];
    return next(err);
  }

  const db = readDb();
  const userIndex = db.users.findIndex((u) => String(u.id) === req.params.id);

  if (userIndex === -1) {
    const err: any = new Error(`User with id '${req.params.id}' not found`);
    err.status = 404;
    return next(err);
  }

  const user = db.users[userIndex];
  const updatedUser = { ...user, ...body, id: user.id };
  db.users[userIndex] = updatedUser;

  writeDb(db);

  res.status(200).json({ data: updatedUser, message: 'OK' });
});

export default router;
