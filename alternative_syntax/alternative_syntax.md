
# Alternative Syntax
In addition to the CommonJS syntax, Node.js also supports an alternative syntax for defining and importing modules. This syntax is often used in ES6 modules, and is similar to the syntax used in the browser.

## Exporting Modules
In the alternative syntax, you can export a module using the `export` keyword, followed by the name of the function or variable you want to export. Here's an example of how to export a function using the alternative syntax:
    
```javascript
module.exports.add = function(a, b) {
    return a + b;
}

const name = 'Hoang';

module.exports.userName = name;
```

