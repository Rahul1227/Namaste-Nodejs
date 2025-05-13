import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
    },
    lastName : {
        type : String,
    },
    emailId :{
        type : String,
        unique : true,
        trim : true, 
        required : true
        
    },
    age :{
        type : Number,
    },
    gender : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true,
        trim : true
    }
});


export const User = mongoose.model("User", userSchema);

