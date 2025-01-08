import express from "express";
import { dbQuery, dbRun } from "../databasee.js";

const router = express.Router();

router.get("/books", async (req, res, next) => {
    try {
        const books = await dbQuery("SELECT * FROM books;");
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
});

router.get("books/:id", async (req, res, next) => {
    try {
        const [book] = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        if (!book) return res.status(404).json({ message: "books not found" });
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
});

router.post("/books", async (req, res, next) => {
    try {
        const { id, title, author, description, year } = req.body;
        const result = await dbRun(
            "INSERT INTO books (id, title, author, description, year) VALUES (?, ?, ?, ?);",
            [id, title, author, description, year]
        );
        res.status(201).json({id: result.lasID, title, author, description, year});
    } catch (err) {
        next(err);
    }
});

router.put("/books/:id", async (req, res, next) => {
    try {
        const [book] = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        if (!book) return res.status(404).json({ message: "book not found" });

        const { id, title, author, description, year } = req.body;
        await dbRun(
            "UPDATE books SET title = ?, author = ?, description = ?, year = ?, WHERE id = ?;",
            [
                id || book.id,
                title || book.title,
                author || book.author,
                description || book.description,
                year || book.year,
                req.params.id,
            ]
        );
        res.status(200).json({ id: req.params.id, title, author, description, year});
    } catch (err) {
        next(err);
    }
});

router.delete("/books/:id", async (req, res, next) => {
    try {
        const [book] = await dbQuery("SELECT * FROM books WHERE id = ?;", [req.params.id]);
        if (!book) return res.status(404).json({ message: "book not found" });

        await dbRun("DELETE FROM books WHERE id = ?;", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;