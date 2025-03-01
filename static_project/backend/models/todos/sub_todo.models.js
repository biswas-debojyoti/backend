

import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({

    subTodo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }

})
export const SubTodo = mongoose.model('SubTodo', subTodoSchema)
