const createUser = function (name, age) {
  return {
    name,
    age,
    toString() {
      return `${this.name} is
${this.age}y.o.`;
    },
  };
};

const users = [
  createUser("John", 21),
  createUser("Tory", 18),
  createUser("Kate", 23),
  createUser("Pete", 22),
];

console.log(
  users.sort(function (a, b) {
    return a.age - b.age;
  })
);
