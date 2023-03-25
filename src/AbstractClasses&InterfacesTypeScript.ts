/*
class Automobile{
 public static color : string = 'red';

 public static calculateMileage = (miles: number, litres: number) => miles / litres;
 
}

console.log(Automobile.calculateMileage(50,10),Automobile.color)
console.log(new Automobile())
*/

/*
type Holidays = {
   date: Date;
   reson: string
}[];


abstract class Department{

  protected abstract holidays: Holidays;

  protected constructor(protected name: string){}

  public addHolidays(holidays: Holidays){
   if(Array.isArray(holidays)){
      for(const holiday of holidays){
         this.holidays.push(holiday)
      }
   }
   return this.holidays;
  }

  public abstract printHolidays () : void | never;

}

class ItDepartment extends Department{
   protected holidays: Holidays = [];

   constructor(){
      super('IT Department');
   }

   public printHolidays () {

      if(this.holidays.length === 0){
         throw new Error('There are no holidays');
      }

      console.log(`Here is the list of holidays ${this.name}`);

      this.holidays.forEach((holiday,index)=>{
         console.log(`${index + 1}. ${holiday.reson}, ${holiday.date}`)
      })

     }

}

class AdminDepartment extends Department{
   protected holidays: Holidays = [];

   constructor(){
      super('Admin Department');
   }

   public printHolidays () {

      if(this.holidays.length === 0){
         throw new Error('There are no holidays');
      }

      console.log(`Here is the list of holidays ${this.name}`);

      this.holidays.forEach((holiday,index)=>{
         console.log(`${index + 1}. ${holiday.reson}, ${holiday.date}`)
      })
      
     }

}


const itHolidays: Holidays = [
   {
      date: new Date(2023,11,1), 
      reson:'IT Department Day'
   },
   {
      date: new Date(2023,12,25), 
      reson:'Chistmas'
   }
]

const adminHolidays: Holidays = [
   {
      date: new Date(2023,11,1), 
      reson:'Admin Department Day'
   },
   {
      date: new Date(2023,12,25), 
      reson:'Chistmas'
   }
]

const itDepartment : ItDepartment = new ItDepartment();
const adminDepartment : AdminDepartment = new AdminDepartment();


itDepartment.addHolidays(itHolidays)
adminDepartment.addHolidays(adminHolidays)

itDepartment.printHolidays();
adminDepartment.printHolidays();

*/

/*
interface Perosn{
   name: string;
   email: string;
   age: number
   phone?: number,
   greet?: () => void
}


const person: Perosn = {
   name: 'Riyad',
   email: '..@gmail.com',
   age: 25
}
*/

/*
enum Roles {
   admin = 'admin',
   author = 'author',
   editor = 'editor'
}

enum PermissionsList{
   read = "read",
   write = 'write',
   execute = 'execute'
}

interface Role{
   role: Roles;
}

interface UserPermissions{
   permissions : PermissionsList[];
}

interface User {
   name: string;
   email: string;
   phone:number;
   gender: string;
}

interface AdminUser extends User, Role, UserPermissions{
   numberofUserReporting: number;
}

interface UserWithAddress extends User{
   address: string;
}

const riyad: AdminUser = {
   name: 'Riyad',
   email: '.@gmail.com',
   phone: 6541653456,
   gender: 'male',
   role : Roles.admin,
   permissions : [
      PermissionsList.read,
      PermissionsList.execute,
      PermissionsList.write
   ],
   numberofUserReporting: 5
}
*/

/*
enum AutomobileTypes {
   car = 'car',
   bus = 'bus',
   van = 'van',
   truck = 'truck',
   bike = 'bike'
}

enum AutomobileBrands {
   ferrari = 'ferrari',
   honda = 'honda',
   bmw = 'bmw',
   toyota = 'toyota'
}

enum AutomobileColors {
   red = 'red',
   blue = 'blue',
   white = 'white',
   black = 'black',
   silver = 'silver'
}

interface Automobile<Type, Brand, Colors>{
   type: Type;
   brand: Brand;
   colors: Colors[];
   description: string;
}


const ferrari : Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
   type : AutomobileTypes.car,
   brand: AutomobileBrands.ferrari,
   colors: [AutomobileColors.black, AutomobileColors.red],
   description : 'This is a Ferrari'
}

const honda : Automobile<string, AutomobileBrands, number> = {
   type: 'car',
   brand: AutomobileBrands.honda,
   colors: [1, 2],
   description: 'This is a Honda'
}

const toyota : Automobile<string, string, string> = {
   type: 'car',
   brand: 'toyota',
   colors: ['red','green'],
   description: 'This is a Toyota'
}
*/

/*
enum AutomobileTypes {
   car = 'car',
   bus = 'bus',
   van = 'van',
   truck = 'truck',
   bike = 'bike'
}

enum AutomobileBrands {
   ferrari = 'ferrari',
   honda = 'honda',
   bmw = 'bmw',
   toyota = 'toyota'
}

enum AutomobileColors {
   red = 'red',
   blue = 'blue',
   white = 'white',
   black = 'black',
   silver = 'silver'
}

interface Automobile<Type, Brand, Colors>{
   type: Type;
   brand: Brand;
   colors: Colors[];
   description: string;
}

interface CommercialVehicle {
   capacity: string;
   licenseRenewalDate: Date;
}

 

class Car implements Automobile<string, AutomobileBrands, AutomobileColors>, CommercialVehicle {

   public type: string = 'car';

   constructor(
      public brand: AutomobileBrands,
      public colors: AutomobileColors[],
      public description: string,
      public capacity: string,
      public licenseRenewalDate: Date,
      private driverName: string
   ) {}
}

class Truck implements Automobile<string, AutomobileBrands, AutomobileColors>{
   public type: string = 'track'
   constructor (public brand: AutomobileBrands, public colors: AutomobileColors[], public description: string){}
}




const ferrari : Car = new Car(
    AutomobileBrands.ferrari,
    [AutomobileColors.red,AutomobileColors.black],
    'This is Ferrari',
    "15 tonners",
    new Date(),
    'Riyad'
   );

   const track : Truck = new Truck(
      AutomobileBrands.toyota,
      [AutomobileColors.red,AutomobileColors.silver],
      'This is Toyota Truck',
     );


console.log(ferrari)
*/

/*
class User {
   constructor(public name: string){}
}

class Password {
   constructor(public password: string){}
}

class RegisteredUser extends User, Password {}
*/

/*
type User = {
   name: string;
}
// type User = { lastName: string }

type AdminUser = {
   isAdmin: boolean;
}

// InterSection Type
const userAndAdmin : User & AdminUser = {
   name: 'Riyad',
   isAdmin: true
}

// Union Type
const userOrAdmin : User | AdminUser = {
   name: 'Mark'
}

// Tuples 
type ResponseTuple = [string, number]

interface Name {
   name: string
};
interface LastName {
   lastName : string
};

class AdminPerson implements Name, LastName{
   constructor(public name: string, public lastName: string){}
}

const adminPerosn : AdminPerson = new AdminPerson('Riyad','Salem');

interface Person extends Name, LastName {
   name: string
}
interface Person {
   lastName: string
}


const person: Person = {
   name: 'Riyad',
   lastName : 'salem'
}
*/

/*
abstract class Person{
   public abstract name: string;
   public abstract email: string;
   public abstract phone: string;

   public greeting() : void { console.log(`Hello ${this.name}`) }

   public static nameClass () {
      return 'Class name is Perosn'
   }

}

interface User {
   name: string;
   email: string;
   phone: string
}

interface Greeting{
   greeting: () => void; 
}

class RegisteredPerosn extends Person{
  constructor(public name: string, public email: string, public phone: string){
   super();
  }
}

class RegisteredUser implements User, Greeting{

   constructor(public name: string, public email: string, public phone: string, private lastName: string){}   

   public greeting = () : void => console.log(`Hello ${this.name} ${this.lastName}`) 

}


const perosn : RegisteredPerosn = new RegisteredPerosn('Riyad','.@gmail.com','+972592290424');
perosn.greeting();
console.log(Person.nameClass())

const user : RegisteredUser = new RegisteredUser('Riyad','.@gmail.com','+972592290424','salem');
user.greeting();
*/