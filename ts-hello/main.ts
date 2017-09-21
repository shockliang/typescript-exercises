let log = function(message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

let msg: string = 'test';
let doLogInternal = () => console.log(msg);