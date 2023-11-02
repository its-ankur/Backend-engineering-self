import express from "express";
import multer from "multer";
const app=express();
app.set("view engine","ejs");

//const upload = multer({dest:"uploads/"});

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload=multer({storage});

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("home");
});

app.post('/upload',upload.fields([{name:"profileImage"},{name:"coverImage"}]),(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("Server started");
});