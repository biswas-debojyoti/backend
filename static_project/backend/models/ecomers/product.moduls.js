
import mongoose from 'mongoose';
 const productSchema = new mongoose.Schema({
        name : {
            type: String,
            required: true
        },
        price : {
            type: Number,
            required: true,
            default: 0 ,
        },
        stock:{
            type:Number,
            default:0,
        },
        description : {
            type: String,
            required: true
        },
        category : {
            type: String,
            required: true
        },
        countInStock : {
            type: Number,
            required: true
        },
        imageUrl : {
            type: String,
            required: true,
 }},{timestamps:true})
 export const Product = mongoose.model('Product', productSchema)