// //const http = require("http");

// import http from "http";
// import {s} from "./features.js"
// import fs from "fs";

// //console.log(s());
// const server = http.createServer((req,res) => {
//     //console.log(req.url);
//     //res.end("<h1>Noice</h1>");
//     if(req.url === "/about"){
//         res.end(`<h1>Love is ${s()} </h1>`);
//     }
//     else if(req.url === "/"){
//         //res.end("<h1>Home Page</h1>");
//         const l=fs.readFileSync(".//features.js","utf-8");
//         res.end(l);
//     }
//     else if(req.url === "/contact"){
//         res.end("<h1>Contact Page</h1>");
//     }
//     else{
//         res.end("<h1>Page not found</h1>");
//     }
// });

// server.listen(5000,()=>{
//     console.log("Server is working");
// });



import express from "express";
//import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
}).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
});

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Message = mongoose.model("Message", messageSchema);


const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//console.log(path.join(path.resolve(),"public"));
app.use(express.static(path.join(path.resolve(), "public")));
//setting up the view engine
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    //res.send("<h1>Home Page</h1>");
    //res.sendStatus(404);//page not found
    //res.sendStatus(400);//bad request
    //res.sendStatus(500);//internal server error
    // res.json({
    //     name:"Ankur",
    //     age:20,
    //     college:"chitkara"
    // });
    //res.status(404).send("Page not found");
    //const file = fs.readFileSync("./index.html", "utf-8");

    //console.log(path.resolve());
    //console.log(__dirname);
    //res.sendFile("./index.html");

    //const pathlocation=path.resolve();
    //res.sendFile(path.join(pathlocation,"./index.html"));
    const {token}=req.cookies;
    if(token){
        res.render("logout");
    }
    else{
        res.render("login");
    }
    //res.render("login");
});

app.post("/login",(req,res)=>{
    res.cookie("token","iamin",{
        httpOnly:true,
        expires:new Date(Date.now()+60*1000)
    });
    res.redirect("/");
});



app.get("/logout",(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    });
    res.redirect("/");
});

app.get('/add', async (req, res) => {
    await Message.create({
        name: "Ankur1",
        email: "ankur1037@gmail.com"
    });
    res.send("Message added");
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.post("/contact", async (req, res) => {
    //console.log(req.body.name);
    const messageData={ name: req.body.name, email: req.body.email };
    await Message.create(messageData);
    res.redirect("/success");
});

app.get("/users", (req, res) => {
    res.json({
        users,
    });
});

app.listen(5000, () => {
    console.log("Server is working");
});