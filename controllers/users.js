import { v4 as uuidv4 } from "uuid";

let users = [];

export const createuser = (req, res) => {
  console.log("Post Rout Reached");
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send("Post Rout Reached");
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUseer = users.find((user) => user.id === id);
  res.send(foundUseer);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, Lastname, age } = req.body;
  const userToBeUpdate = users.find((user) => user.id === id);
  if (name) userToBeUpdate.name = name;
  if (Lastname) userToBeUpdate.Lastname = Lastname;
  if (age) userToBeUpdate.age = age;

  res.send(`updatd ${name}`);
};
