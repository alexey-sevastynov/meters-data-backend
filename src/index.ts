import app from "./app";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { initializeDatabaseConnection } from "./infra/database/mongo/connect";
import { initializeSocketServer } from "./sockets/socket-init";

async function startServer() {
    await initializeDatabaseConnection();

    const httpServer = createServer(app);

    const io = new SocketIOServer(httpServer, {
        cors: {
            origin: [
                "http://localhost:5173",
                "https://alexey-sevastynov.github.io",
                "https://alexey-sevastynov.github.io/meters-data",
                "https://meters-socket-server.up.railway.app",
            ],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true,
        },
        transports: ["websocket"],
    });

    initializeSocketServer(io);

    httpServer.listen(3000, () => {
        console.log(`🚀 Server is running at http://localhost:3000`);
    });
}

startServer();
