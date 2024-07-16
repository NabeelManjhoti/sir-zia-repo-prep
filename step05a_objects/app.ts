let teacher = {
    name: "Mubashir",
    experiance: "5"
};

console.log(teacher.name);
console.log(teacher["experiance"]);

//Type Declaration.
let student: {
    name:string,
    age:number
};

student = {
    name: "Nabeel",
    age: 27
};

console.log(student["name"]);
console.log(student.age);