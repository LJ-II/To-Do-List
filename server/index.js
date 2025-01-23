import express from "express";
import AuthRoute from "./routes/auth.js";
import ToDoRoute from "./routes/todo.js"; 
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const corsOptions = 
{
    origin: "https://to-do-list-client-3etv.onrender.com",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/user", AuthRoute);
app.use("/api/todos", ToDoRoute);

/*app.get("/", (req, res, next) =>
    {
        res.send("Hello World!");
    });*/

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/opt/render/project/src/client2/dist", "index.html"));
    });

    app.use(express.static(path.join(__dirname, "/opt/render/project/src/client2/dist")));

    console.log(path.join(__dirname, "/opt/render/project/src/client2/dist"));
    console.log(__dirname);
    console.log(__filename);


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


    
    /*const express = require('express');
    const path = require('path');*/
    
    /*const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);*/
    // Serve static files from the React app
    /*app.use(express.static(path.join(__dirname, '../client/build')));*/
    
    // Catch-all route to serve the React app for undefined routes
    /*app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });*/
    
    /*app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

    
        