class Person {

   // private _age : number | undefined; 
   constructor(private _name: string, private _age: number){
      this.testUserAge(_age);
   }

   private testUserAge = (age : number) => {
      if(age > 200 || age < 0){
         throw new Error('The age must be within reange of 0-200')
      }
   }

   public set name(name: string){
      this._name = name;
   }

   public get name(){
      return this._name
   }

   public set age(age : number){
      this.testUserAge(age);
      this._age = age;
   }

   public get age(): number{
      // if(this._age === undefined){ throw new Error('The age property has not been set as yet') }
      return this._age;
   }
   
}

const perosn : Person = new Person('Riyad', 10);

// perosn.age = 210

console.log(perosn.age, perosn.name)
