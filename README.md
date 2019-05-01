# Getting Started with TypeScript

## Installation
* NodeJS: https://nodejs.org/en/
* IDE/Code Editor: VS Code: https://code.visualstudio.com/

### Install TypeScript
```
$ sudo npm install -g typescript
```

### Check Version
```
$ node -v
$ tsc -v
```
### Code Format in Editor
* ⇧⌥F

### TypeScript in Visual Studio Code
https://code.visualstudio.com/docs/languages/typescript


### First Program:
```typescript
let myMessage = "Hello world from type script";
console.log(myMessage);
```

### Run Program:
```
$ tsc HelloWorld.ts
$ node HelloWorld
```

### Watch Program
```
tsc main.ts --watch
```

### Comments in TypeScript
* Single-line comments ( // ) 
* Multi-line comments (/* */)

## Data Types
| Data type  | Keyword | Description |
| ------------- | ------------- |------------- |
| Number  | Number  | Double precision 64-bit floating point values. It can be used to represent both, integers and fractions.  |
| String  | String  | Represents a sequence of Unicode characters  |
| Boolean  | boolean  | Represents logical values, true and false  |
| Void  | Void  | Used on function return types to represent non-returning functions  |
| Null  | Null  | Represents an intentional absence of an object value.  |
| Undefined  | Undefined  | Denotes value given to all uninitialized variables  |



#### Useful References
* Typescript handbook: http://www.typescriptlang.org/docs/handbook/basic-types.html
* Typescript-in-5-minutes: http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html 

* Typescript github repo: 
https://github.com/Microsoft/TypeScript

* Tutorialspoint: https://www.tutorialspoint.com/typescript/

* Learn TypeScript in 50 Minutes - Tutorial for Beginners: https://youtu.be/WBPrJSw7yQA

* Wikipedia: https://en.wikipedia.org/wiki/TypeScript
