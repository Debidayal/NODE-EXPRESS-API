import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:Id", getUserByID);

router.delete("/:Id", deleteUser);

router.patch("/:Id", updateUser);

export default router;
