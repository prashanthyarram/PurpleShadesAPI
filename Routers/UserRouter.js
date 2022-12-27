import express from "express";
import userdata from "../UserData.js";
import User from "../Models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const userrouter = express.Router();

userrouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdusers = await User.insertMany(userdata.users);
    res.send({ createdusers });
  })
);

userrouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = User.findOne(
      { email: req.body.email },
      function (err, result) {
        if (err) {
          res.status(404).send({ message: "There is a error from prashanth" });
        } else if (result) {
          if (bcrypt.compareSync(req.body.password, result.password)) {
            res.send({
              _id: result._id,
              name: result.name,
              email: result.email,
              isadmin: result.isadmin,
              isLoggedIn: true,
              token: generateToken(result),
            });
            return;
          }
        }
        res.status(401).send({ message: "invalid Email or Password" });
      }
    );
  })
);

userrouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      isadmin: false,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isadmin: createdUser.isadmin,
      isLoggedIn: true,
      token: generateToken(createdUser),
    });
  })
);

userrouter.post(
  "/delete",
  expressAsyncHandler(async (req, res) => {
    const userId = req.body.id;
    User.remove({ _id: userId }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send(`The Review with id ${userId} has been deleted`);
      }
    });
  })
);

export default userrouter;
