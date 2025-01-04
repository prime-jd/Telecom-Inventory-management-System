import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
 
    password : {
        type : String,
        required : [true, "password required"]    
    },
    refreshTokens :{
        type : String
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : Number,
        required: true,

    },
    email : {
       type : String,
       required : true,
    }, 
    phone : {
        type : Number,
        required :true
    },
    lastLogin : {
        type : Date,
        required : true
    },
    role : {
        type : "String",
        required : true
    }


}, {timestamps : true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10)
        next()
    })
        
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
    
}
userSchema.methods.generateAccessToken= function(){
   return jwt.sign(
    {
        userId : this.userId,
        username : this.username,
        email : this.email,
    },
     process.env.ACCESS_TOKEN_SECRET, 
     {expiresIn : process.env.ACCESS_TOKEN_EXPIRY}) 
}

userSchema.methods.generateRefreshToken= function(){
    return jwt.sign({userId : this.userId},
         process.env.REFRESH_TOKEN_SECRET,
          {expiresIn : process.env.REFRESH_TOKEN_EXPIRY})
}

export const User = mongoose.model("User", userSchema);