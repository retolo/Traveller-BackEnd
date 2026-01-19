
import { model, Schema } from "mongoose";



const userModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatarUrl: {
        type: String,
        required: false,
        default: ''
    },
    articlesAmount: {
        type: Number,
        required: false,
        default: 0
    },
    description: {
        type: String,
        required: false,
        default: ''
    }
    
}, {timestamps: true, versionKey: false});



userModel.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.password;
    return obj;
}





export const UserCollection = model('users', userModel) 