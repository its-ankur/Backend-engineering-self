const mongoose = require("mongoose");
const User = require("./user");
mongoose.connect("mongodb://127.0.0.1/testdb");
async function run() {
    const user=await User.create({"name":"Ankur","age":20});
    user.name="atul";
    await user.save()
    // const user = new User({ name: "ankur", age: 20 });
    // await user.save();
    console.log(user);
}
run();