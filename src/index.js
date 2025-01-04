
import dotenv from "dotenv";
import connectDB from "../db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>
{
    app.listen(process.env.PORT, () =>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((error)=>
{
    console.log("ERROR :", error);
    throw error;
});


dotenv.config({
    path: "./.env",
});














