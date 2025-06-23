import app from "./app";
import { initializeDatabaseConnection } from "./infra/database/mongo/connect";
import { getEnvVariable } from "./infra/env/env-functions";
import { envKeys } from "./infra/env/env-keys";

const defaultPort = 3000;
const PORT = getEnvVariable(envKeys.port) ?? defaultPort;

async function startServer() {
    await initializeDatabaseConnection();

    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
}

startServer();
