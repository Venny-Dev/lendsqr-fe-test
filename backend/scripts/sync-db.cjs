'use strict';

const fs = require('fs');
const path = require('path');

const DB_SOURCE = path.resolve(__dirname, '../../../lendsqr-db/db.json');
const DB_LOCAL = path.resolve(__dirname, '../db.json');

// Check that the source file exists
if (!fs.existsSync(DB_SOURCE)) {
  process.stderr.write(`[sync-db] Error: source file not found at ${DB_SOURCE}\n`);
  process.exit(1);
}

// Read the source file
const raw = fs.readFileSync(DB_SOURCE, 'utf-8');

// Parse the JSON
let parsed;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  process.stderr.write(`[sync-db] Error: failed to parse JSON from ${DB_SOURCE}: ${err.message}\n`);
  process.exit(1);
}

// Write to the local db.json
fs.writeFileSync(DB_LOCAL, JSON.stringify(parsed, null, 2), 'utf-8');

// Report success
const keyCount = Object.keys(parsed).length;
process.stdout.write(`[sync-db] Synced ${keyCount} top-level key(s) to backend/db.json\n`);
