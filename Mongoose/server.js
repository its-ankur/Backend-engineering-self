const mongoose = require("mongoose");
const User = require("./user");
mongoose.connect("mongodb://127.0.0.1/testdb");

run();
async function run() {
   // User.findById.save();
    try{
        const user=await User.where("age")
        .gte(20)
        .where("name")
        .equals("Ankur")
        .limit(1)
        .select("age");
        console.log(user);
        // const user = await User.create({
        //     name: "Atul",
        //     age: 20,
        //     email:"ankur@gmail.com",
        //     hobbies:["Cricket","Football"],
        //     address:{
        //         street:"xyz",
        //         city:"baddi"
        //     }
        // });
        // user.createdAt="2020-10-10";
        // await user.save();
        // console.log(user);
    }
    catch(e){
        console.log(e.message);
    }
    // user.name="atul";
    // await user.save()
    // // const user = new User({ name: "ankur", age: 20 });
    // // await user.save();
    // console.log(user);

}