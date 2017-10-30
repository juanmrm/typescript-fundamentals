class Student {
  // Poniendo private a las variables -> Shorthand, nos evitamos tener que declarar los atributos y asignarlos en el constructor
 constructor(private fName: string, private lName: string) {}

 getFullName(): string {
   return this.fName + ' ' + this.lName;
 }

}

export { Student };
