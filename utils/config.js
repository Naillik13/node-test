require('dotenv').config();

const { DB_HOST, DB_NAME, DB_URL, DB_USER, DB_PASS } = process.env;

const db = `${DB_HOST}://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = { db };
