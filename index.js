import express from "express";
import mongoose from "mongoose";
import userrouter from "./Routers/UserRouter.js";
import productRouter from "./Routers/ProductRouter.js";
import dotenv from "dotenv";
import ReviewRouter from "./Routers/ReviewsRouter.js";

dotenv.config();

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://prashanthyarram:Wantonnomad%408180@cluster0.dqyqu.mongodb.net/purpleShades?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userrouter);
app.use("/api/reviews", ReviewRouter);
app.use("/api/products", productRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
