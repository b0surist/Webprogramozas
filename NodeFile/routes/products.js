import express from "express";
import { dbQuery, dbRun } from "../database.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await dbQuery("SELECT * FROM products;");
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

router.get("products/:id", async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "Products not found" });
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { name, description, price, picture } = req.body;
        const result = await dbRun(
            "INSERT INTO products (name, description, price, pictre) VALUES (?, ?, ?, ?);",
            [name, description, price, picture]
        );
        res.status(201).json({ id: result.lastID, name, description, price, picture});
    } catch (err) {
        next(err);
    }
});

router.put("/products/:id", async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "product not found" });

        const { name, description, price, picture } = req.body;
        await dbRun(
            "UPDATE products SET name = ?, description = ?, price = ?, picture = ? WHERE id = ?;",
            [
                name || product.name,
                description || product.description,
                price || product.price,
                picture || product.picture,
                req.params.id,
            ]
        );
        res.status(200).json({ id: req.params.id, name, description, price, picture});
    } catch (err) {
        next(err);
    }
});

router.delete("/products/:id", async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id = ?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "product not found" });

        await dbRun("DELETE FROM products WHERE id = ?;", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;