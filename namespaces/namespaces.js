"use strict";
var myNamespace;
(function (myNamespace) {
    function displayData() {
        return "Some data";
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
console.log(myNamespace.displayData());
