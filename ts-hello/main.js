var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var msg = 'test';
var doLogInternal = function () { return console.log(msg); };
