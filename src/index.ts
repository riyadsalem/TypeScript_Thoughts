function intro(name: string, age?: number): string {
   if(typeof age === 'undefined') return `My name is ${name}`;
   return `My name is ${name} and age is ${age}`
}
const intro2 = (name: string, age: number) => `My name is ${name} and age is ${age}`;
const intro3 = function(name: string, age: number) { return `My name is ${name} and age is ${age}`};

enum AgeUnit {
   years = 'years',
   months = 'months'
};

type greetingFunction = (greeting:string) => string;

type Perosn = {
   name: string;
   age: number;
   ageUnit: AgeUnit;
   country: string;
   // greet: Function;
   greet: greetingFunction;

}

const perosn : Perosn = {
   name: 'Riyad Salem',
   age: 25,
   ageUnit: AgeUnit.years,
   country: 'Palestine',
   greet: (greeting) => `${greeting} ${perosn.name}`,
}

const convertAgeToMonths = (perosn : Perosn) : Perosn => {
   perosn.age = perosn.age * 12;
   perosn.ageUnit = AgeUnit.months;
   return perosn;
}


type Reservation = {
   departureDate: Date;
   returnDate?: Date;
   departingFrom: string;
   destination:string
}

type Reserve ={ (
   departureDate: Date,
   returnDate: Date,
   departingFrom: string,
   destination:string
) : Reservation | never ;
(departureDate: Date, departingFrom: string, destination: string):
| Reservation
| never;
}



const reserve: Reserve = (
   departureDate: Date,
   returnDateOrDepartingFrom: Date | string,
   departingFromOrDestination: string,
   destination?: string
 ) => {
   if(returnDateOrDepartingFrom instanceof Date && destination){
      return{
         departureDate,
         returnDate: returnDateOrDepartingFrom,
         departingFrom: departingFromOrDestination,
         destination
      }
   } else if (typeof returnDateOrDepartingFrom === "string") {
      return {
         departureDate,
         departingFrom: returnDateOrDepartingFrom,
         destination: departingFromOrDestination,
         }
   }
   throw new Error("Please provide valid details to reserve a ticket");
  }

  console.log(reserve(new Date(), new Date(), "New York", "Washington"));
  console.log(reserve(new Date(), "New York", "Washington"));
  
