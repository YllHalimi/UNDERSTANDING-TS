type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type numeric = number | boolean;
type Universal = Combinable & numeric;




function add(a: number, b: number):number; 
function add(a: string, b: string):string; 
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1,5);


const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO" }
};

console.log(fetchedUserData.job?.title ?? "No job title");
// Output: "CEO"

const fetchedUserData2 = {
  id: "u2",
  name: "Anna"
};

interface Job {
  title: string;
  description: string;
}

interface User {
  id: string;
  name: string;
  job?: Job; // optional property
}

const fetchedUserData3: User = {
  id: "u1", 
  name: "bond"
};

// Use optional chaining + nullish coalescing
const jobTitle = fetchedUserData3.job?.title ?? "No job title";

console.log(jobTitle); // "No job title"


// type UnknownEmployee = Employee | Admin;
// function printEmpoloyeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("priviledges" in emp) {
//     console.log("Priviledges: " + emp.priviledges);
//   }
//   if ("startDate" in emp) {
//     console.log("Date: " + emp.startDate);
//   }
// }

// printEmpoloyeeInformation(e1);

// class Car {
//   drive() {
//     console.log("driving...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("driving a truck...");
//   }
//   loadCargo(ammount: number) {
//     console.log("loading cargo ..." + ammount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(100);
//   }

//   if (vehicle instanceof Car) {
//     vehicle.drive();
//   }
// }
// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   kind: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   kind: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.kind) {
//     case `bird`:
//       speed = animal.flyingSpeed;
//       break;
//     case `horse`:
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("moving with speed: " + speed);
// }

// moveAnimal ({kind:'bird', flyingSpeed:100});

// // const userInput = <HTMLInputElement>document.getElementById('msg-output')!; 
// const userInput = document.getElementById('msg-output')! as HTMLInputElement;
// userInput.value = "hi there";


// interface ErrorContainer{ // {email: 'not a valid email, username: 'must start with character'}
//     [prop: string]: string
// }

// const errorBag : ErrorContainer = {};
// const errorBag1 : ErrorContainer = {
//     email: "now a valid email",
//     username: "Must start with a capital character"
// };