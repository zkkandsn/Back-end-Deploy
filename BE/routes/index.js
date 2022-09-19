const userRouter = require("./userRouter");
const express = require("express");

const router = express.Router();

router.use("/users", userRouter);

module.exports = router;
