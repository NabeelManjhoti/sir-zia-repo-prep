let myName:unknown = "Nabeel";
console.log((myName as string).length);
console.log((<string> myName).length);