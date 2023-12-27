const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes")


app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes)

mongoose.connect(process.env.MONGO_URL, {   
}).then(()=> {
    console.log(`db connection successfully`)
}).catch((err)=>{
    console.log(err.message)
});

PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);