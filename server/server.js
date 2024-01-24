const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
//const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/userRoutes");
const societiesRoutes = require("./routes/societiesRoutes");

const app = express();

dotenv.config();

//connect to DB:
connectDB();
//mongoose.connect(process.env.DB_URL+"/G_Up_DB");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/societies", societiesRoutes);

//trial route
app.get("/trial", (req, res) => {
  res.send("Trial Page");
});

//pass new user info for registration form
/*
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        //res.set('Content-type', 'application/json');
        res.json({user: email, mss: 'created user'});  //send smth can cause error if data cannot be properly send in JSON, use {} to send as JSON, otherwise it may look as HTML
        res.json({ status: `ok`, mssg: `information reached the server` });

    } catch (error) {
        res.json({ status: `error`, mssg: `email already exists in the database`});
    }
    
});
*/

//pass new user info for login
/*
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email, password: req.body.password});
   
    if (user) {
        
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,

            },
            'secret123keytoencodejsonpayload'
        );
        res.json({ status: `ok`, mssg: `authentication passed`, user:token});
    } else {
        res.json({ status: `error`, mssg: `failed authentication`, user: false });
    }
    
});
*/
//link

app.listen(process.env.PORT, () => {
  console.log(`Server runs on port: ${process.env.PORT}`);
});
