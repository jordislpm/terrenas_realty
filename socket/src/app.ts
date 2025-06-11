import { Server } from "socket.io";
import http from "http";
import { registerSocketEvents } from "./events/socketEvents";

const socketPort = Number(process.env.SOCKET_PORT) || 4000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: clientUrl,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"], // ✅ Add this
  },
});

registerSocketEvents(io)

httpServer.listen(socketPort, () => {
  console.log(`🚀 Socket.IO server running on port ${socketPort}`);
});