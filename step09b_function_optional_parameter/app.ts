//Named functions with optional parameters.
  function buildName(firstName:string, lastName?:string):string{
    if(lastName)
        return firstName + " " + lastName;
    else
    return firstName;
  };

  let result1 = buildName("Nabeel"); //Ok
  let result2 = buildName("Nabeel", "Ali"); //Also ok
  let result3 = buildName("Mr", "Nabeel", "Ali"); //Error, too many parameters.

//Anonymous function type with optional parameters.
  let buildName1:(firstName:string, lastName?:string) => string =
  function(firstName:string, lastName?:string):string{
    if(lastName)
        return firstName + " " + lastName;
    else
    return firstName;
  };