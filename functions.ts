function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`result: ${num}`);
}

function addAndHandle(n1:number, n2:number, callback: (num: number) => void){
    const result = n1+n2;
    callback(result)
}
let combineValue: (a, b) => number;
combineValue = add;

// printResult(combineValue(5, 4));


addAndHandle(10, 20, (result)=> {
    console.log(result)
});