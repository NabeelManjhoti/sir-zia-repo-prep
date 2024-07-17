//Any.
let anyValue:any;

anyValue = "Hi"; //Ok
anyValue = 5; //ok
anyValue = true; //ok
anyValue = undefined; //ok
anyValue = null; //ok
anyValue = []; //ok
anyValue = {}; //ok
anyValue = () => {console.log("Hi again")}; //ok
anyValue = Math.random; //ok

//Unknown.
let unknownValue:unknown;

unknownValue = "Hello"; //ok
unknownValue = 10; //ok
unknownValue = false; //ok
unknownValue = undefined; //ok
unknownValue = null; //ok
unknownValue = []; //ok
unknownValue = {}; //ok
unknownValue = () => {console.log("Hello again")}; //ok
unknownValue = Math.random; //ok

// Assigning a value of type unknown to variables of other types
let val:unknown;

const val1:string = val; //error
const val2:number = val; //error
const val3:boolean = val; //error
const val4:any = val; //ok
const val5:unknown = val; //ok
const val6:Record<string, any> = val; //error
const val7:any[]; //error
const val8: (args:any[]) => void = val; //error

//never.

// Function returning never must not have a reachable end point
function error(message:string):never{
    throw new Error(message)
};

//Infured return type is never.
function fail(){
    return error("Something failed")
};

// Function returning never must not have a reachable end point.
function infiniteLoop():never{
    while(true) {}
};