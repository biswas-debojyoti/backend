
import mongoose from "mongoose";
const userSchema  = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
},{timstamps:true})
export const User = mongoose.model('User', userSchema)
