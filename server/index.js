import express from "express";
import AuthRoute from "./routes/auth.js";
import ToDoRoute from "./routes/todo.js"; 
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

dotenv.config();

const corsOptions = 
{
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/user", AuthRoute);
app.use("/api/todos", ToDoRoute);

app.get("/", (req, res, next) =>
    {
        res.send("Hello World!");
    });

// global error handler
app.use((err, req, res, next) => 
{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({error: message})
})

app.listen(PORT, () => 
    {
        console.log(`Listening on port ${PORT}`);
    });


    
    