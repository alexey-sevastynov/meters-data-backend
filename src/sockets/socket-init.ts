import { Server, Socket } from "socket.io";
import { socketEventNames } from "./socket-event-names";

export function initializeSocketServer(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log("Client connected:", socket.id);

        socket.on(socketEventNames.createItem, (data) => {
            io.emit(socketEventNames.createItem, data);
        });

        socket.on(socketEventNames.updateItem, (data) => {
            io.emit(socketEventNames.updateItem, data);
        });

        socket.on(socketEventNames.deleteItem, (data) => {
            io.emit(socketEventNames.deleteItem, data);
        });

        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
        });
    });
}
