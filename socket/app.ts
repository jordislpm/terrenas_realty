import { Server } from "socket.io";
import http from "http";

const socketPort = Number(process.env.SOCKET_PORT) || 4000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";

// Create a basic HTTP server
const httpServer = http.createServer();

// Attach socket.io to the HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: clientUrl,
    methods: ["GET", "POST"],
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

// Now use the callback safely with httpServer.listen
httpServer.listen(socketPort, () => {
  console.log(`🚀 Socket.IO server running on port ${socketPort}`);
});