var myNamespace;
(function (myNamespace) {
    myNamespace.name = "Shock";
    function displayData() {
        return "Name:" + myNamespace.name;
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
///<reference path="my-module.ts" />
var thisSpace = myNamespace.displayData;
console.log(thisSpace());
