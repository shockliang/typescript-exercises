function stringFunction(): string {
  // console.log("Hello I'm a string");
  return "Hello I'm a string!";
}

function cal2(val1: number, val2: number): number {
  let total = val1 + val2;
  return total;
}

var result = cal2(3, 2);

// let universal = stringFunction;
// console.log(universal());

// let universal = cal2;
// console.log(universal(4, 8));

// let universal: () => string;
// universal = stringFunction;

let universal: (va1: number, val2: number) => number;
universal = cal2;
console.log(universal(9, 9));
