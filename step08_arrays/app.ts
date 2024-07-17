let array1:number[] = [
    5, 6, 7
]; //Correct syntax
console.log(array1[1]); //Corrct syntax

let array2:Array<number> = [
    1, 2, 3
]; //Alternative correct syntax.

let array3:number[] = []; //Correct syntax to define an empty array

let array4:number[] = new number[2]; //Error

let array5:number[] = [];
array5.push(1,2,3,4); //Dynamically adding
console.log(array5);