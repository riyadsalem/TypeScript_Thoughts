/*
class User {
    name: string;
    email: string;
    age: number;
 
    constructor(name: string, email: string, age: number){
       this.name = name;
       this.email = email;
       this.age = age;
    }
 
    greet() : void { 
       console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`) 
    }
 }
 
 class AdminUser extends User{
    isAdmin : boolean = true;
    userReporting: number;
 
    
    // constructor(userReporting: number){ super('riyad','.@gmai.com',25); this.userReporting = userReporting;}
    

    constructor(name: string, email: string, age: number, userReporting: number){
       super(name, email, age);
       this.userReporting = userReporting;
    }
 
 }
 
 const user = new User('Riyad','riyad.m.salem.19988',25);
 const adminUser = new AdminUser('Salme', 'ex@gmail.com',26, 1);
 
 console.log(user);
 console.log(adminUser);
 */

 /*
 class Person {
   protected name: string;
   private email: string;
   public age: number;

   // constructor(protected name: string, private email: string,  public age: number){}
   

   constructor(name: string, email: string,  age: number){
      this.name = name;
      this.email = email
      this.age = age;
   }

   public getName () {
      return this.email
   }

}

class Admin extends Person{
   public returnName() {
      return this.email 

   }
}

const perosn : Person = new Person('Riyad','.@gmai.com',25);
const admin : Admin = new Admin('Mark','..@gmail.com',26)


console.log(perosn);
console.log(admin)
*/

/*
class Person {

   constructor(private name: string, public age: number){
      if(age > 200 || age < 0){
         throw new Error('The age must be between 0-200')
      }
   }

   public getName () {
      return this.name
   }

}

const perosn : Person = new Person('Riyad',24);
const anonthePerson : Person = new Person('Mark',30);

console.log(perosn);
console.log(anonthePerson)
*/

/*
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
*/
