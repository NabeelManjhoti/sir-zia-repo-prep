//use const where variable values do not change
  const accountNumber:number = 1234567890;
  const fullName:string = "Muhammad Nabeel";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope.
  if(true){
    let a = 4;
  }else{
    let a = "String";
  };
  console.log("let: " + a); //// Error: z is not defined in this scope