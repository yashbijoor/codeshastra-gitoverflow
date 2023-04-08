const mongoose = require("mongoose");
const allModels = require("../utils/allModels");
const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");

const User = new mongoose.model("User", userSchema);

exports.signupController = async (req, res, next) => {
  const hashedpassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    email: req.body.email,
    password: hashedpassword,
    name: req.body.name,
  });

  newUser
    .save()
    .then(() =>
      res.json({
        success: "Successfully entered a new user " + req.body.name,
      })
    )
    .catch((err) => {
      console.log(err);
    });
  req.session.signedin = true;
  req.session.email = req.body.email;
};

exports.signinController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        req.session.signedin = true;
        req.session.email = req.body.email;
        res.json({ Success: "Auth Successful" });
      } else {
        res.json({ Error: "Wrong email or password" });
      }
    } else {
      res.json({ Error: "Wrong email or password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal server error occured" });
  }
};

exports.informationController = async (req, res, next) => {
  try {
    await User.updateOne(
      { email: req.session.email },
      { monthlyIncome: req.body.monthlyIncome }
    );
    await User.updateOne(
      { email: req.session.email },
      { budget: req.body.budget }
    );
    await User.updateOne(
      { email: req.session.email },
      { expense: req.body.expense }
    );

    res.json({ Success: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal server error occured" });
  }
};
