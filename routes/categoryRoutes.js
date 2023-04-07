import express from "express";
import {requireSignIn, isAdmin } from '../middlewares/authMiddleware.js'
import { CreateCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

// routes

router.post('/create-category',requireSignIn,isAdmin,CreateCategoryController)

// update category

// router.put(
//     "/update-category/:id",
//     requireSignIn,
//     isAdmin,
//     updateCategoryController
//   );
  

export default router

