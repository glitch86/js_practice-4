const mergeObjects = (obj1: Object, obj2: object) => {
  return {
    ...obj1,
    ...obj2,
  };
};

console.log(mergeObjects({ a: 1 }, { b: 2 }));
