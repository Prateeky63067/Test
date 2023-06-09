import express from "express"
import Color from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'

// configure dotenv
dotenv.config();

// database config
connectDB();


// rest object
const app=express();

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);



// rest Api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to eccomerce App</h1>")
})

// PORT
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`server is running at port number ${PORT}`.bgCyan.white);
})