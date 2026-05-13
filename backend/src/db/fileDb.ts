import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  [key: string]: unknown;
}

export interface UserDetail {
  id: string;
  [key: string]: unknown;
}

export interface DbShape {
  users: User[];
  userDetails: UserDetail[];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DB_PATH = path.resolve(__dirname, '../../db.json');

export function readDb(): DbShape {
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  const parsed = JSON.parse(raw) as { users: Record<string, unknown>[]; userDetails: Record<string, unknown>[] };
  const users: User[] = parsed.users.map((user) => ({
    ...user,
    id: String(user.id),
  })) as User[];
  const userDetails: UserDetail[] = (parsed.userDetails ?? []).map((u) => ({
    ...u,
    id: String(u.id),
  })) as UserDetail[];
  return { users, userDetails };
}

export function writeDb(data: DbShape): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}
