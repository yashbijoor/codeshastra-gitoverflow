const express = require("express");
const router = express();

const userController = require("../controllers/userController");

router.post("/user/sign-up", userController.signupController);

router.post("/user/sign-in", userController.signinController);

router.post("/user/info", userController.informationController);

router.post("/user/update-expense", userController.updateExpense);

router.post("/user/loan", userController.updateLoan);

router.post("/user/loan-info", userController.getLoanInfo);

module.exports = router;
