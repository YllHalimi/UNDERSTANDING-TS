// const names: Array<string | number> = [1,2, "ckemi"];

// console.log(names);

// const promise: Promise<string>  = new Promise((resolve, reject) => {
//   setTimeout(()=> {
//     resolve(`this is done!`);
//   },2000);
// });

function merge<T extends object , U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies : ['Sports'] }, {age: 30});
//can't access directly properties


interface Lengthy{
  length: number;
}

function countAndDescribe<T extends Lengthy>(element : T): [T, string]{
  let descpriptionText = 'Got no value.';
  if(element.length === 1){
    descpriptionText = 'Got 1 element';
  }else if(element.length > 1 ){
    descpriptionText = 'Got ' + element.length + ' elements';

  }
  return [element,descpriptionText];

}

console.log(countAndDescribe(['SPORTS', 'COOKING']));


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getProperty({name:'max', age: 30}, 'age'));


class DataStorage<T extends string | number | boolean>{
  private data: T[] = [];
  addItem(item: T){
    this.data.push(item);
  }
  removeItem(item:T){
    if(this.data.indexOf(item) === -1){
      return;
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return[...this.data];
  }
}

// " f  "

