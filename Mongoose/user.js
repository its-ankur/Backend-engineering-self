const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
    streeet:String,
    city:String
})
const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        validate:{
            validator:function(value){
                return value%2==0;
            },
            message:"Age must be even"
        }
    },
    email:{
        type:String,
        minlength:10,
        required:true,
        lowercase:true,
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now(),
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now(),
    },
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    hobbies:[String],
    address:addressSchema
})

module.exports=mongoose.model("User",userSchema);