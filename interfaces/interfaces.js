"use strict";
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car1(automobile) {
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles an hour");
}
car1(automobile);
