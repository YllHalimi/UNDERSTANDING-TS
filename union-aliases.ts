//union types

// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     }else{
//         result = input1.toString() + input2.toString();
//     }

//     return result;
// }

// const combinedAges = combine(30,25);
// console.log(combinedAges);

// const combinedName = combine(`Max`, `Ana`);
// console.log(combinedName);

// type aliases

type Combinable = number | string;
type ConversionDesc = `asNumber` | `asText`;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDesc
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 25, asNumber`);
console.log(combinedAges);

const combinedName = combine(`Max`, `Ana`, `as asText`);
console.log(combinedName);
