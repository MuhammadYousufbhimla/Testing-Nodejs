const express=require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema(
{
    f_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    phoneno: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
  
},);

//creating collection
const user_modules = new mongoose.model("user_modules",userSchema)

//export collection
module.exports = user_modules;