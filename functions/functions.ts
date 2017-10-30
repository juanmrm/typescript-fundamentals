enum LanguagesKnown { English, Hindi, Tamil };

let student = {
  name: 'Jose',
  age: 30,
  phone: 2143432,
  language: LanguagesKnown[LanguagesKnown.Tamil]
};

let studentList = [
  { name: 'Juan', age: 30, phone: 2143432, language: LanguagesKnown[LanguagesKnown.English]},
  { name: 'Ignacio', age: 25, phone: 99498494, language: LanguagesKnown[LanguagesKnown.Hindi]},
];

studentList.push(student);

// Function declaration with typed parameters
function getStudentsList(students: any[]) {
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