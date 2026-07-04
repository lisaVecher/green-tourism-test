import { Schema, model } from "mongoose";

const categoriesSchema = new Schema({});

export const CategoriesModel = model("categories", categoriesSchema);
