interface Student {
    studentName:string,
    studentId:number
};

interface Teacher {
    teacherName:string,
    teacherId:number
};

type IntesectedType = Student & Teacher;

let obj1:IntesectedType = {
    studentName: "Salaar",
    studentId: 1234,
    teacherName: "Mubashir",
    teacherId: 9876
};

console.log(obj1.teacherId);
console.log(obj1.studentName);