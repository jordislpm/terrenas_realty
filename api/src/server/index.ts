import express from "express";
import dotenv from "dotenv";
import apiRoutes from "src/routes";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const corsOptions = {
    origin: "*"
    // origin: "http://localhost:5173"
};

const server = express();
// Middleware to process JSON

// server.use((req: Request, res: Response, next: NextFunction) => {
//     console.log(Solicitud recibida: ${req.method} ${req.url});
//     next();
//   });
server.use(express.json());
server.use(cors(corsOptions))


apiRoutes(server);


server.listen(PORT, ()=>{
    console.log("server is runnig!")
});





