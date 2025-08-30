type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
// class interface

class Person implements Greetable {
  name?: string;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if(this.name){
    console.log(phrase + ` ` + this.name);
  }else{
    console.log("Hi!");
  }
}
}

//Based object interface
let user1: Greetable;
// user1 = {
//     name:"Yll",
//     greet(phrase: string){
//         console.log(phrase + " " + this.name);
//     }

// };
user1 = new Person();
user1.greet("Hello, I'm ");
