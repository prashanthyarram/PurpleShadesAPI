import mongoose from "mongoose";

const reviewschema = new mongoose.Schema(
  {
    User: { type: String, required: true },
    UserName: { type: String, required: true },
    Product: { type: String, required: true },
    review: { type: String, required: true, unique: true },
    stars: { type: Number, required: true, in: [0, 1, 2, 3, 4, 5] },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Reviews", reviewschema);
export default Review;
