

var datasqlite = require('sqlite3').verbose()
var md5 = require('md5')
//const DBSOURCE = "db.sqlite"

let db = new datasqlite.Database('data.db', datasqlite.OPEN_READWRITE | datasqlite.OPEN_CREATE, (err) => {

  if (err) {
    return console.error(err.message);
  }
    else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            cpf INTEGER
            email text UNIQUE,
            password text,
            PHADRESS text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                return console.error(err.message)
                // Table already created
            }else{
                console.log('fala galera')
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, cpf, email, password,PHADRESS) VALUES (?,?,?)'
                db.run(insert, ["admin",12345678901,"admin@example.com",md5("admin123456"),"lala1"])
                db.run(insert, ["user",10987654321"user@example.com",md5("user123456","lala2")])
            }
        });
    }
});
module.exports = db
