const express=require('express');
const mongoose=require('mongoose');
const bookRoutes = require("../Backend/routes/book-routes.js")
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors());
app.use("/books",bookRoutes)

// app.use("/", (req,res,next)=>{
//     res.send("This is our starting app")
// });



mongoose.connect("mongodb+srv://admin:sJ1S40iZANmNP1mQ@cluster0.hy1rqqm.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected to Database"))
.then(()=>{
    app.listen(5000);

})
.catch((err)=>console.log(err))

//sJ1S40iZANmNP1mQ