import express from "express"
import reviewsController from "../controllers/reviewsController.js";

const router = express.Router();

router.route("/")
.get(reviewsController.getReviews)
.post(reviewsController.createReviews)
router.route("/:id")
.put(reviewsController.updateReviews)
.delete(reviewsController.deleteReview);

export default router;