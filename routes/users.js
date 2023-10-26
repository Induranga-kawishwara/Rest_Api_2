import express from "express";
import {
  createuser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createuser);

// / user/2 => req.parms{id:2}

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
