import express from "express";
import cors from "cors";
import routes from "./routes";
import { htmlContent } from "./htmlContent";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(htmlContent);
});

app.use("/api", routes);

export default app;
