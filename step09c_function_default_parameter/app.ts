////Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
  function buildName(firstName:string, lastName:string = "Ali"):string{
    if(lastName)
        return firstName + " " + lastName;
    else
    return firstName
  };

  let result1 = buildName("Nabeel"); //Works perfectly because last parameter is optional
  let result2 = buildName("Nabeel", "Ali") //Also Works
  let result3 = buildName("Mr", "Nabeel", "Ali"); //Error: too much parameters

////anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
  let buildName1:(firstName:string, lastName?:string) => string = 
  function(firstName:string, lastName:string = "Ali"):string{
    if(lastName)
        return firstName + " " + lastName;
    else
    return lastName;
  };

  let result4 = buildName1("Nabeel")//Works perfectly because last parameter is optional
  let result5 = buildName1("Nabeel", "Ali"); //Also works
  let result6 = buildName1("Mr", "Nabeel", "Ali"); //Error: too much parameters