import { IStudentInfo } from "./IStudentInfo";
import Student from "./Student";
// import Stud from "./Student"; Podemos usar un alias y del mismo modo estariamos importando la default class exportada en Student.ts
// import { Student } from './Student'

// Enum definition
enum LanguagesKnown { English, Hindi, Tamil };

let student:IStudentInfo = {
  name: 'Jose',
  age: 30,
  phone: 2143432,
  language: LanguagesKnown[LanguagesKnown.Tamil]
};

let studentList:IStudentInfo[] = [
  { name: 'Juan', age: 30, phone: 2143432, language: LanguagesKnown[LanguagesKnown.English]},
  { name: 'Ignacio', age: 25, phone: 99498494, language: LanguagesKnown[LanguagesKnown.Hindi]},
];

studentList.push(student);

for (var index = 0; index < studentList.length; index++) {
  var element = studentList[index];
  console.log(element);
}

// LanguagesKnown[LanguagesKnown.Tamil] asi estamos recuperando el Value el enumerado
// LanguagesKnown.Tamil Asi recuperamos la Key que es el numero de enumerado


//####################### Basic Functions #################################################

// Function declaration with typed parameters
function getStudentsList(students: IStudentInfo[]) {
  students.forEach(element => {
    console.log(element);
  });
}

getStudentsList(studentList);

// Rest Parameters
function getNumbers(...nums: number[]) {
  nums.forEach(element => {
    console.log('Number: ' + element);
  });
}

getNumbers(1,2,3,4,5);

// Default Parameters
function getInfo(info: string = "Default Info") {
  console.log(info);
}

getInfo();
getInfo('Other Info');

//################################### Functions advanced ############################

// Anonymous Function
let studentName = function (fName: string, lName: string) {
  return fName + '...' + lName;
}

console.log(studentName('Juan', 'Miguel'));

// Arrow Function
let arrowStudentName = (fName: string, lName: string) => { return fName + '...' + lName};

console.log(arrowStudentName('Jose', 'Ignacio'));


//######################### Classes ################################

let s = new Student('Nuevo', 'Student');
console.log(s.getFullName());

// ######################## Generics #########################

// Using generics
let studentListG:Array<IStudentInfo> = [
  { name: 'Juan Generic', age: 30, phone: 2143432, language: LanguagesKnown[LanguagesKnown.English]},
  { name: 'Ignacio Generic', age: 25, phone: 99498494, language: LanguagesKnown[LanguagesKnown.Hindi]},
];

// Function declaration with typed parameters
function getStudentsListGenerics(students: Array<IStudentInfo>) {
  students.forEach(element => {
    console.log(element);
  });
}

getStudentsListGenerics(studentListG);

