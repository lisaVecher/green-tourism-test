import { Router } from "express";

const storiesRouter = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Stories route works",
  });
});

export default storiesRouter;
