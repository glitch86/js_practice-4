const fizzBuzz = (num: number) => {
  for (let index = 1; index < num; index++) {
    if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
};

fizzBuzz(15);
