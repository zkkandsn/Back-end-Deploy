const express = require("express");
const Users = require("../model/users");

const getUsers = (req, res, next) => {
  console.log("working");
  try {
    Users.find({}, (err, data) => {
      if (err) {
        return err;
      }
      res.json({
        data: data,
      });
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
const createUser = (req, res, next) => {
  try {
    const user = new Users(req.body);
    user.save();

    res.json({
      success: true,
      message: "hereglegch amjilttai burtgegdlee",
    });
  } catch (error) {
    console.error(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.json({
      success: true,
      data: "deleted",
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  await Users.findByIdAndUpdate(id, req.body);
  const user = await Users.findById(id);
  try {
    res.json({
      success: true,
      data: "User Updated",
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};
module.exports = { getUsers, createUser, deleteUser, updateUser };
