abstract class People {
  abstract displayData(): void;
}

class Kids extends People {
  displayData() {
    console.log("kids data");
  }
}

let kids = new Kids();
kids.displayData();
