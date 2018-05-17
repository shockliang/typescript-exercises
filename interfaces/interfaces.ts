interface AutomobileInterface {
  brand: string;
  speed: number;
  speedMethod(velocity: number): void;
}

const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  }
};

function car1(automobile: AutomobileInterface) {
//   automobile.brand = 3.14;
  console.log(
    `this ${automobile.brand} is going at ${automobile.speed} miles an hour`
  );
}

car1(automobile);
