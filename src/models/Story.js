import { Schema, model } from "mongoose";

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    text: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    savesCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Story = model("Story", storySchema);
