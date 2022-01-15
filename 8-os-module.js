const os = require('os'); // no dot, direct declaration [builtIn module]

// method telling info about current user

const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds

console.log(`System uptime is ${os.uptime} seconds`);


// useful info about the current system[powerful builtin modules]

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);