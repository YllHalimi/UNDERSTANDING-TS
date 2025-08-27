// const activeHobbies = ['Hiking'];
// const hobbies = ['sports', 'cooking'];

// activeHobbies.push(...hobbies) ;

const person = {
  firstName: "Max",
  age: 30,
};

// const copiedPerson ={...person};

const add = (...numbers: number[]) => {
  return numbers.reduce((a: number, b: number) => a + b);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobbies;

const { firstName: fullname, age } = person;
console.log(fullname, age, person);
