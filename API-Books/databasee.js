import sqlite3 from 'sqlite3'

const db = new sqlite3.Database("../database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE books")
    await dbRun("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, description TEXT, year INTEGER)");
    const books = [
        {
            id: 1,
            title: "Harry Potter és a bölcsek köve",
            author: "J. K. Rowling",
            description: "A Roxfort Boszorkány- és Varázslóképző Szakiskolában töltött első tanév kemény erőpróba a diákok számára. Harry Potternek nem csupán a vizsgákon kell megfelelnie, de egy életre-halálra szóló küzdelemnek is részese lesz. A tizenegy éves varázslójelölt története meghódította az egész világot.",
            year: 2024
        },
        {
            id: 2,
            title: "Valaki vett valamit",
            author: "Valakinek a valakije",
            description: "Valakinek a valakije vett valamit",
            year: 2024
        }
    ];

   for(const book of books){
        await dbRun("INSERT INTO books (id, title, author, description, year) VALUE(?, ?, ?, ?);") , [book.id, book.title, book.author, book.description, book.year]
   } 
}

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };