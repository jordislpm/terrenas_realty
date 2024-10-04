// server.ts
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import apiRoutes from "../routes";
// importa otras dependencias según sea necesario

const PORT = 8000;
const server = express();

// Middleware para registrar las solicitudes entrantes
server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: "*",
  // origin: "http://localhost:5173/"
};

server.use(cors(corsOptions));
server.use(express.json());

apiRoutes(server);

// Middleware para manejar errores
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Inicia el servidor
server.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});





