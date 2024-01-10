const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes")
const messagesRoute = require("./routes/messagesRoute")
PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)
app.use("/api/messages", messagesRoute)

mongoose.connect(process.env.MONGO_URL, {   
}).then(()=> {
    console.log(`db connection successfully`)
}).catch((err)=>{
    console.log(err.message)
});


app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);