import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required:true,
        minLength:2,
        maxLength:50,
    },
    lastName : {
        type : String,
        required : true,
        minLength : 2,
        maxLength: 50,
    },
    emailId :{
        type : String,
        unique : true,
        trim : true, 
        required : true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email',value)
            }
        }
        
    },
    age :{
        type : Number,
        min : 18,
        max :55,
    },
    gender : {
        type : String,
        required : true,
        validate(value){
            if(!['male', 'female'].includes(value)){
                throw new Error('Invalid Gender');
            }
        }
    },
    password :{
        type : String,
        required : true,
        trim : true
    },
    photoUrl : {
        type : String,
        default : "https://res.cloudinary.com/drucgtpiw/image/upload/v1746713560/Avatar_1_u2hm77.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error('Invalid photoUrl',value)
            }
        }
    },
    about :{
        type : String,
        default : "The is the default about section for a user"
    }, 
    skills :{
        type : [String],
        validate(value){
            if(value.length>5){
                throw new Error('Max of 5 skills allowed');
            }
        }
    }
}, {
    timestamps:true
});


export const User = mongoose.model("User", userSchema);

