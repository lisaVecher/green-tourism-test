import { registerUser } from "./auth/registerUser.js";
import { loginUser } from "./auth/loginUser.js";

import { getCategories } from "./categories/getCategories.js";

import { getAllStories } from "./stories/getAllStories.js";
import { getStoryById } from "./stories/getStoryById.js";
import { getRecommendedStories } from "./stories/getRecommendedStories.js";
import { createStory } from "./stories/createStory.js";

import { getAllUsers } from "./users/getAllUsers.js";
import { getUserById } from "./users/getUserById.js";
import { getCurrentUser } from "./users/getCurrentUser.js";
import { addSavedStory } from "./users/addSavedStory.js";
import { removeSavedStory } from "./users/removeSavedStory.js";
import { getMyStories } from "./users/getMyStories.js";
import { getSavedStories } from "./users/getSavedStories.js";

export const auth = {
  registerUser,
  loginUser,
};

export const categories = {
  getCategories,
};

export const stories = {
  getAllStories,
  getStoryById,
  getRecommendedStories,
  createStory,
};

export const users = {
  getAllUsers,
  getUserById,
  getCurrentUser,
  addSavedStory,
  removeSavedStory,
  getMyStories,
  getSavedStories,
};
