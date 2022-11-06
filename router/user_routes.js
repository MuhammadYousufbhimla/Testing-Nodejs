const{demoapi,getalluser,specficstudent}=require("../controllers/user_controller"); // Here line controller call
const express=require ("express");
const user_routes=express.Router()
// Path of First API

user_routes.post("/api/testingapi",demoapi)
user_routes.get("/api/getalluser",getalluser)
user_routes.get("/api/specficstudent/:id",specficstudent)






module.exports=user_routes