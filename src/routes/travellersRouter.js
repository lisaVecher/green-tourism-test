import { Router } from "express";
import {
  getTravellers,
  getTopTravellers,
} from "../controllers/travellersController.js";

const travellersRouter = Router();

travellersRouter.get("/", getTravellers);
travellersRouter.get("/top", getTopTravellers);

export default travellersRouter;
