// old style (var) - mistakes are possible
var x = "hello";
console.log(x);
var x = "world";
console.log(x);

// new style (let) is better
let y = "hi";
console.log(y);
//let y = "work"; // mistake
console.log(y);

// set types of variables
let a: number = 10;
let hello: string = "hello world";
let isValid: boolean = true;

// arrays
let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

// alternative way
let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names);

// tuples
let userInfo: [string, number];
userInfo = ["Tom", 28];
console.log(userInfo[1]);

// enum
enum Season {Winter, Spring, Summer, Autumn};
let current: Season = Season.Summer;
console.log(current);

// any type (flexible type)
let someVar: any = "hello";
console.log(someVar);
someVar = 20;
console.log(someVar);

// complex object
let person = {name: "John", age: 23};
console.log(person);
