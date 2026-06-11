const countProperties = (obj: Object) => {
  return Object.keys(obj).length;
};

console.log(countProperties({ a: 1, b: 2, c: 3 }));
