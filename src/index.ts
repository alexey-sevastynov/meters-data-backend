import app from "./app";
import { initializeDatabaseConnection } from "./infra/database/mongo/connect";

async function startServer() {
    await initializeDatabaseConnection();

    app.listen(3000, () => {
        console.log("🚀 Server is running at http://localhost:3000");
    });
}

startServer();
