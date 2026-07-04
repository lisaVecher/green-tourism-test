import { Schema, model } from "mongoose";

const travellerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    articlesAmount: {
      type: Number,
      default: 0,
    },
    savedArticles: {
      type: [Schema.Types.ObjectId],
      ref: "articles",
      default: [],
    },
  },
  {
    versionKey: false,
    collection: "users",
  },
);

export const travellerModel = model("travellers", travellerSchema);
