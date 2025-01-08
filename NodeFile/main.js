import express from "express";
import cors from "cors";
import { initializeDB } from "./database.js";
import productsRouter from "./routes/products.js";
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/products", usersRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
};

startServer();