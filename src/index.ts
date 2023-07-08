// function sayHello(name: string) {
//   console.log("Hello " + name);
// }

// sayHello("World");

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// }

// getData().then((data) => console.log(data));

//If you don't have ts-node, you need to use `npm install -D @types/node`
// import fs from "fs";

// const dir = fs.readdirSync(__dirname);
// console.log(dir);

import { type User } from "./type";

async function getUserData() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData: User[] = await users.json();
  return usersData;
}

getUserData().then((data) => {
  data.forEach((user) => {
    console.log(user.address.geo.lat);
  });
});
