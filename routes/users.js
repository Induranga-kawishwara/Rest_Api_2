import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post Rout Reached");
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send("Post Rout Reached");
});

// / user/2 => req.parms{id:2}

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUseer = users.find((user) => user.id === id);
  res.send(foundUseer);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the id ${id} deleted from the database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, Lastname, age } = req.body;
  const userToBeUpdate = users.find((user) => user.id === id);
  if (name) userToBeUpdate.name = name;
  if (Lastname) userToBeUpdate.Lastname = Lastname;
  if (age) userToBeUpdate.age = age;

  res.send(`updatd ${name}`);
});
export default router;
