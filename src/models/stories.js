import { Schema, model } from "mongoose";

const storiesSchema = new Schema({});

export const StoriesModel = model("stories", storiesSchema);
