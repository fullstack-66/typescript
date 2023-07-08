// function sayHello(name: string) {
//   console.log("Hello " + name);
// }

// sayHello("World");

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
}

getData().then((data) => console.log(data));
