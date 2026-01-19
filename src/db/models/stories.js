import { model, Schema } from "mongoose";




const travelersSchema = new Schema(
  {
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    article: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    date: {
      type: String,
      default: () => {
        const now = new Date();
        return now.toISOString().split('T')[0];
      },
    },
    favoriteCount: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: false, versionKey: false, collation: { locale: 'en', strength: 2 },
  collection: 'travellers.travellers' },
);

export const StoriesCollection = model('Traveller', travelersSchema);

console.log(StoriesCollection.collection.name);