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
