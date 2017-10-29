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

for (var index = 0; index < studentList.length; index++) {
  var element = studentList[index];
  console.log(element);
}


// LanguagesKnown[LanguagesKnown.Tamil] asi estamos recuperando el Value el enumerado

// LanguagesKnown.Tamil Asi recuperamos la Key que es el numero de enumerado
