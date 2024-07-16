let myname;
myname = null;
console.log(myname);
myname = "Nabeel";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge;
myAge = 27; //Narrowing.
console.log(myAge);
// console.log(myAge.toLowerCase());//Error
myAge = "Don't Know"; //Narrowing.
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string  
//                                 //because of narrowing
let newAge = Math.random() > 0.6 ? "Nabeel" : 5;
// newAge.toLowerCase() //Error: Transpilor cannot Arrow.
if (newAge === "Nabeel") {
    newAge.toUpperCase();
}
;
if (typeof newAge === "string") {
    newAge.toUpperCase();
}
;
typeof newAge === "string"
    ? newAge.toUpperCase() //Ok: String
    : newAge.toFixed(); //Ok: Number
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
// age = "living";//Error
let zia;
zia = "zia";
// zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName?.toUpperCase(); //OK
let data;
export {};
