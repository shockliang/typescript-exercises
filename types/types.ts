let car1: string;
let engine: number;
let isFast: boolean;

car1 = "BMW";
// car1 = 1.1;

engine = 2.4;
// engine = "2.4";

isFast = true;
// isFast = "true";

let nameA: any;

nameA = "Shock";

nameA = 12;

let cars: string[] = ["BMW", "Mercedes"];

// cars = "Ford";

let carAny: any[] = ["BMW", "Mercedes", 17];

let numberAry: number[] = [18.83, 16, 17];

function cal(val1: number, val2: number): number {
  let total = val1 + val2;
  return total;
}

var result = cal(3, 2);
