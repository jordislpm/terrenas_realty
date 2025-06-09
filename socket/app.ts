import { Server } from "socket.io";
import http from "http";

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

io.on("connection", (socket) => {
  console.log("✅ New socket connected:", socket.id);

  socket.on("message", (data) => {
    console.log("💬 Message received:", data);
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});

httpServer.listen(socketPort, () => {
  console.log(`🚀 Socket.IO server running on port ${socketPort}`);
});