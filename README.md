## Installation
* NodeJS: https://nodejs.org/en/
* IDE/Code Editor: VS Code: https://code.visualstudio.com/
* Install Typescript:$ sudo npm install -g typescript

### Check Version
```
$ node -v
$ tsc -v
$ tsc --help
```
### Format Code
* ⇧⌥F

### Editing TypeScript
https://code.visualstudio.com/docs/languages/typescript


### First Program:
```typescript
var message:string = "Hello World" 
console.log(message)
```
### Run Program:
```
$ tsc HelloWorld.ts
$ node HelloWorld
```

### Comments in TypeScript
* Single-line comments ( // ) 
* Multi-line comments (/* */)

### Data Type
| Data type  | Keyword | Description |
| ------------- | ------------- |------------- |
| Number  | Number  | Double precision 64-bit floating point values. It can be used to represent both, integers and fractions.  |
| String  | String  | Represents a sequence of Unicode characters  |
| Boolean  | boolean  | Represents logical values, true and false  |
| Void  | Void  | Used on function return types to represent non-returning functions  |
| Null  | Null  | Represents an intentional absence of an object value.  |
| Undefined  | Undefined  | Denotes value given to all uninitialized variables  |

