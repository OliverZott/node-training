/* 
SQlite default implementation in node
run: node .\sqlite-support.js 
*/

import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('test.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL)
    `)

// db.exec(`
//     INSERT INTO users (name, email) VALUES ('John Doe', 'jd@mail.com')
//     `)

const users = db.prepare(`
    SELECT * FROM users
    `).all();

console.log(users);