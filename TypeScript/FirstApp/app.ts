/*
 * To compile in command line:
 * ts-node <file_name>
 */
class User {
    name : string;
    age : number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
var tom : User = new User("Tom", 29);
console.log("Name: " + tom.name, " age: " + tom.age);
