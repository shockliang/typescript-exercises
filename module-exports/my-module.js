"use strict";
var myNamespace;
(function (myNamespace) {
    myNamespace.name = "Shock";
    function displayData() {
        return "Name:" + myNamespace.name;
    }
    myNamespace.displayData = displayData;
})(myNamespace || (myNamespace = {}));
