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
    janExpense: [0, 0, 0, 0, 0, 0],
    febExpense: [0, 0, 0, 0, 0, 0],
    marchExpense: [0, 0, 0, 0, 0, 0],
    aprilExpense: [0, 0, 0, 0, 0, 0],
    mayExpense: [0, 0, 0, 0, 0, 0],
    juneExpense: [0, 0, 0, 0, 0, 0],
    julyExpense: [0, 0, 0, 0, 0, 0],
    augExpense: [0, 0, 0, 0, 0, 0],
    septExpense: [0, 0, 0, 0, 0, 0],
    octExpense: [0, 0, 0, 0, 0, 0],
    novExpense: [0, 0, 0, 0, 0, 0],
    decExpense: [0, 0, 0, 0, 0, 0],
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

    res.json({ Success: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal server error occured" });
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.session.email });
    if (user) {
      let exp = [0, 0, 0, 0, 0, 0];
      if (req.body.month == "jan") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.janExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { janExpense: exp });
      } else if (req.body.month == "feb") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.febExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { febExpense: exp });
      } else if (req.body.month == "mar") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.marchExpense[i];
        }
        await User.updateOne(
          { email: req.session.email },
          { marchExpense: exp }
        );
      } else if (req.body.month == "apr") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.aprilExpense[i];
        }
        await User.updateOne(
          { email: req.session.email },
          { aprilExpense: exp }
        );
      } else if (req.body.month == "may") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.mayExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { mayExpense: exp });
      } else if (req.body.month == "jun") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.juneExpense[i];
        }
        await User.updateOne(
          { email: req.session.email },
          { juneExpense: exp }
        );
      } else if (req.body.month == "jul") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.julyExpense[i];
        }
        await User.updateOne(
          { email: req.session.email },
          { julyExpense: exp }
        );
      } else if (req.body.month == "aug") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.augExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { augExpense: exp });
      } else if (req.body.month == "sep") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.septExpense[i];
        }
        await User.updateOne(
          { email: req.session.email },
          { septExpense: exp }
        );
      } else if (req.body.month == "oct") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.octExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { octExpense: exp });
      } else if (req.body.month == "nov") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.novExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { novExpense: exp });
      } else if (req.body.month == "dec") {
        for (let i = 0; i < 6; i++) {
          exp[i] = req.body.expense[i] + user.decExpense[i];
        }
        await User.updateOne({ email: req.session.email }, { decExpense: exp });
      }
      res.json({ Success: "Successfully updated" });
    } else {
      res.json({ Error: "Unable to update" });
    }
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal Server Error" });
  }
};

exports.getLoanInfo = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.session.email });
    if (user) {
      res.json({ Loan: user.loan });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateLoan = async (req, res, next) => {
  try {
    await User.updateOne({ email: req.session.email }, { loan: req.body.loan });
    res.json({ Success: "Updated Loan Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal Server Error" });
  }
};

exports.getExpenseInfo = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.session.email });
    if (user) {
      if (req.body.month == "jan") {
        res.json({ Expense: user.janExpense });
      } else if (req.body.month == "feb") {
        res.json({ Expense: user.febExpense });
      } else if (req.body.month == "mar") {
        res.json({ Expense: user.marchExpense });
      } else if (req.body.month == "apr") {
        res.json({ Expense: user.aprilExpense });
      } else if (req.body.month == "may") {
        res.json({ Expense: user.mayExpense });
      } else if (req.body.month == "jun") {
        res.json({ Expense: user.juneExpense });
      } else if (req.body.month == "jul") {
        res.json({ Expense: user.julyExpense });
      } else if (req.body.month == "aug") {
        res.json({ Expense: user.augExpense });
      } else if (req.body.month == "sep") {
        res.json({ Expense: user.septExpense });
      } else if (req.body.month == "oct") {
        res.json({ Expense: user.octExpense });
      } else if (req.body.month == "nov") {
        res.json({ Expense: user.novExpense });
      } else if (req.body.month == "dec") {
        res.json({ Expense: user.decExpense });
      } else {
        res.json({ Error: "No match" });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ Error: "Internal Server Error" });
  }
};
