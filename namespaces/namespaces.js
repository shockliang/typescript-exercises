"use strict";
var myNamespace;
(function (myNamespace) {
    function displayData() {
        console.log("Some data");
    }
})(myNamespace || (myNamespace = {}));
