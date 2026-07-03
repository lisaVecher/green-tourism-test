import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
    },

    avatarUrl: {
      type: String,
      default: "",
    },

    articlesAmount: {
      type: Number,
      default: 0,
    },

    savedArticles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model("User", userSchema);
