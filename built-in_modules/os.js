const os = require("os"); // with built-in modules, no need to specify the path

// Info about current user
const user = os.userInfo();
// console.log(user); 


// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()/60/60} hours`);

// Info about current OS
const currentOS = {
    name: os.type() == "Darwin" ? "Mac OS" : os.type(),
    relase: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);