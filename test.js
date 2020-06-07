arr = [1, 2, 3, 4, 5];

console.log(
  arr.map((item, index) => {
    return `${index} : ${(item += 1)}`;
  })
);
