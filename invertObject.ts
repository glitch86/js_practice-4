const invertObject = (obj: object) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      acc[value] = key;
      return {};
    },
    {} as Record<string, string>,
  );
};

console.log(invertObject({ a: 1, b: 2, c: 3 }));
