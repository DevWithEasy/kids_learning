const sqlite3 = require('sqlite3').verbose()
const SQLdb = new sqlite3.Database('public/main.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = SQLdb