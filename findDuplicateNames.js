const findDuplicateName = (arr) => {
  const map = {};
  for (const { name } of arr) {
    map[name] = (map[name] || 0) + 1;
  }
  return Object.keys(map).filter((name) => map[name] > 1);
};

console.log(
  findDuplicateName([{ name: "Ali" }, { name: "Sara" }, { name: "Ali" }]),
);
