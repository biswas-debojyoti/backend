
import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    slug : {
        type: String,
        required: true,
        unique: true
    },
    parentId : {
        type: String,
        required: true,
        default: null
    }
},{timestamps:true})
export const Category = mongoose.model('Category', categorySchema)




