import express from 'express';
const app = express();
import session from 'express-session';
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));
app.get('/', (req, res) => {
    // req.session.username="Ankur";
    // res.send("Session are set");
    if (req.session.user_visit) {
        req.session.user_visit++;
        res.send("Hi , you have visited " + req.session.user_visit + " times")
    }
    else {
        req.session.user_visit = 1;
        res.send("Hi , you have visited first time");
    }
});

// app.get('/get-session',(req,res)=>{
//     res.send("Your session user name is "+req.session.username);
// })
app.listen(3000, () => {
    console.log("Server started");
});