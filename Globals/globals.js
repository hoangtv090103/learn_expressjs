// GLOBALS - anywhere in application can access - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log("Current directory: ", __dirname)

setInterval(() => {
    console.log('Hello World')
}, 1000)
