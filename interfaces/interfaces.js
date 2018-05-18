"use strict";
var automobile2 = {
    brand: "Porsche",
    speed: 300
};
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car1(automobile) {
    //   automobile.brand = 3.14;
    console.log("this " + automobile.brand + " is going at " + automobile.speed + " miles an hour");
}
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass() {
        this.brand = "BMW";
        this.speed = 200;
    }
    AutomobileClass.prototype.speedMethod = function (velocity) {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour. Now velocity:" + velocity);
    };
    return AutomobileClass;
}());
var carObj = new AutomobileClass();
carObj.speed = 225;
carObj.speedMethod(250);
