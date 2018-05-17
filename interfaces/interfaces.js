"use strict";
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
