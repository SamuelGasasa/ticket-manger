const searchText = "ack";

const check = new RegExp(searchText, "gi");

const arr = [
  { name: "search" },
  { name: "test" },
  { name: "fullstack" },
  { name: "lessstack" },
  { name: "games" },
  { name: "124sea53" },
];

const newArr = arr.filter((item) => {
  return item.name.includes(searchText.toLocaleUpperCase());
});

console.log(newArr);
