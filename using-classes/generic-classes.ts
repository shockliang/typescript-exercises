class objGenericClass<T extends string, T1> {
  constructor(public value: T, public value1: T1) {}
}

let obj1 = new objGenericClass<string, number>("Hello", 3.1415);
let obj2 = new objGenericClass("Hola!", 3.1415);
let obj3 = new objGenericClass<string, boolean>("false", true);

let array1: Array<number> = [1.23, 3.1415];
let array2: number[] = [1.23, 3.1415];
