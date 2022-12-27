import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../ProductData.js";
import Product from "../Models/ProductModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProduct = await Product.insertMany(data.products);
    res.send({ createdProduct });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const x = req.params.id;
    const product = await Product.findById(x);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product not Found" });
    }
  })
);

productRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      img1: req.body.img1,
      img2: req.body.img2,
      img3: req.body.img3,
      img4: req.body.img4,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      details: req.body.details,
      rating: req.body.rating,
      numreviews: req.body.numreviews,
      actualprice: req.body.actualprice,
    });
    const createdProduct = await product.save();
    res.send({
      _id: createdProduct._id,
      name: createdProduct.name,
    });
  })
);

productRouter.post(
  "/delete",
  expressAsyncHandler(async (req, res) => {
    const productId = req.body.id;
    Product.remove({ _id: productId }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send(`The Review with id ${productId} has been deleted`);
      }
    });
  })
);
export default productRouter;
