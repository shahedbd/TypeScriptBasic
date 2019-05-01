interface IParent1 {
    v1: number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 { }
var Iobj: Child = { v1: 12, v2: 23 }
console.log("value 1: " + `${Iobj.v1}` + " value 2: " + `${Iobj.v2}`);
