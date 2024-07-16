//Annonymous.
  let managment:{name:string, exp:number} = {
    name: "John",
    exp: 5
  };

//Alliased object type.
  type Employee = {
    name:string,
    age:number
  };

  let employee:Employee = {
    name: "Alan",
    age: 30
  };

  console.log(employee["name"]);
  console.log(employee.age);

//Interfaces.
  interface Student {
    name:string,
    age?:number
  };

  let uniStudent:Student = {
    name: "Zaid"
  };