import { model, Schema } from "mongoose";


const userSchema = Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    },

})

const UserData = model("User", userSchema);


export default  UserData;


 