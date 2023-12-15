const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const connectDB= require("./config/db");
const dotenv = require("dotenv");
const User = require("./models/user_model");

dotenv.config();


//connect to DB:
connectDB();
//mongoose.connect(process.env.DB_URL+"/G_Up_DB");

const app = express();

app.use(express.json());
app.use(cors());

//trial route
app.get("/trial", (req,res) => {
    res.send("Trial Page");
});

//pass new user info for registration form
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.send(user.email); 
        res.json({ status: `ok`, mssg: `information reached the server` });

    } catch (error) {
        res.json({ status: `error`, mssg: `email already exists in the database`});
    }
    
});

//pass new user info for login
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email, password: req.body.password});
   
    if(user) {
        res.json({ status: `ok`, mssg: `authentication passed` });
    } else {
        res.json({ status: `error`, mssg: `failed authentication` });
    }
    
});



app.listen(process.env.PORT, () => { 
    console.log(`Server runs on port: ${process.env.PORT}`);
});