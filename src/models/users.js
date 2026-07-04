import { Schema, model } from "mongoose";

const usersSchema = new Schema({});

export const UsersModel = model("users", userSchema);
