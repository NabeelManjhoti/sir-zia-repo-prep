//Note: All parameters are required.

//Named function
  function add(a:number, b:number):number{
    return a + b;
  };

//Anonymous function
  let add1 = function(a:number, b:number):number {
    return a + b;
  };

//Annonymous function with explicit type.
  let add2:(a:number, b:number) => number = function(a:number, b:number):number{
    return a + b;
  };

//Type names don't matter.
  let add3:(baseValue:number, increament:number) => number = function(a:number, b:number):number{
    return a + b;
  };

//Lambda functions.
  let add4 = (a:number, b:number) => a + b;
  //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

  type GreetFunction = (a:string) => void;
  function greeter(fn:GreetFunction){
    //...
  };