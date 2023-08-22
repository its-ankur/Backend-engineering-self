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
import fs from "fs";
import path from "path";

const app = express();
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

    res.render("index",{ name:"Ankur"});
});

app.listen(5000, () => {
    console.log("Server is working");
});