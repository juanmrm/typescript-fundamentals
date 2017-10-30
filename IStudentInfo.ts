// Interface declaration
interface IStudentInfo {
  name: string;
  age: number;
  phone: number;
  language: string;
}

export { IStudentInfo }; // Podemos definir un Alias con el as
// export { IStudentInfo as StudentInfo }; // Podemos definir un Alias con el as