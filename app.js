const express = require("express");
const dotenv = require("dotenv");
const main = require("./config.js");
const cors = require("cors");
const authRoute = require("./routes/authRoute.js");
dotenv.config();
const app = express();


app.use(cors({
    origin : "http://localhost:5173" ,
    credentials : true
}));
app.use(express.json());


main();


app.use("/api/v1/auth" , authRoute);


app.listen(process.env.PORT , ()=> {
    console.log("app is listening...");
});