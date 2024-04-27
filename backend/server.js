import express, { urlencoded } from "express";
import {PORT} from "./config.js";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/bookRouter.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

app.use("/books",booksRoute);



mongoose.connect(mongoDBURL).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    }); 
console.log("Connected to DataBase");
}).catch((err)=>{
console.log(err);
})


