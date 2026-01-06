import { model, Schema } from "mongoose";



const travellersModel = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    ownerId:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date:{
        type: String,
        required: true
    },
    favoriteCount:{
        type: Number,
        default: 0
    }
}, {timestamps: true, versionKey: false});



export const TravellersCollection = model('travellers', travellersModel);