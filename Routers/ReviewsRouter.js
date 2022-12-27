import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../ReviewData.js";
import Review from "../Models/ProductReviews.js";

const ReviewRouter = express.Router();

ReviewRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const reviews = await Review.find({});
    res.send(reviews);
  })
);

ReviewRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdReview = await Review.insertMany(data.reviews);
    res.send({ createdReview });
  })
);

ReviewRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const x = req.params.id;
    Review.find({ Product: x }, function (err, reviews) {
      if (reviews) {
        const sum = reviews.reduce((accumulator, object) => {
          return accumulator + object.stars;
        }, 0);
        const totalStars = sum / reviews.length;
        res.send({ stars: totalStars, reviews });
      } else if (err) {
        res.send(err);
      } else {
        res.status(404).send({ message: "Reviews not found for Product" });
      }
    });
  })
);

ReviewRouter.post(
  "/post",
  expressAsyncHandler(async (req, res) => {
    const product = new Review({
      User: req.body.user,
      UserName: req.body.name,
      Product: req.body.product,
      review: req.body.review,
      stars: req.body.stars,
    });
    const createdReview = await product.save();
    res.send("Review Added!");
  })
);

ReviewRouter.post(
  "/delete",
  expressAsyncHandler(async (req, res) => {
    const reviewId = req.body.id;
    Review.remove({ _id: reviewId }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send(`The Review with id ${reviewId} has been deleted`);
      }
    });
  })
);

export default ReviewRouter;
