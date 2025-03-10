import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE products")
    await dbRun("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, descriptioni TEXT, picutre TEXT, price REAL)");

    
    const product = [
        { name: "alma", description: "piros", picture: "alma.picture", price: 10.65 },
        { name: "banán", description: "érett", picture: "banana.picture", price: 8.21 },
        { name: "tej", description: "kecske tej", picture: "tej.picture", price: 15.99 },
    ];

    for (const product of product) {
        await dbRun("INSERT INTO products (name, email, class) VALUES (?, ?, ?)", [product.name, product.description, product.picture, product.price]);
    }
};

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


export { db, dbQuery, dbRun, initializeDB};