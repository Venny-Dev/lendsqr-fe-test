import type { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status: number = err.status ?? err.statusCode ?? 500;
  const message: string = err.message ?? 'Internal server error';
  const errors: string[] = Array.isArray(err.errors) ? err.errors : [];

  res.status(status).json({ message, errors });
}
