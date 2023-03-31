/*
// Taypecating
const numbers = <const>{
    x: 10,
    y: {
        z: 20
    }
};
 // } as const ;

 // let firstNameField = document.getElementById('firstName')!;
 let firstNameField = document.getElementById('firstName')! as HTMLInputElement;
 // firstNameField.value;

 let myValue: any = "42";
 let myNumber = String(myValue);
 */

 /*
// Totality 
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekdays | 'Sat' | 'Sun';

const nextDayForAWeekDay = (weekday : Weekdays) : Day => {
    switch(weekday){
        case 'Mon' : return 'Tue';
        case 'Tue' : return 'Wed';
        case 'Wed' : return 'Thu';
        case 'Tue' : return 'Fri';
        case 'Fri' : return 'Sat';
        default : return 'Sun';
    }
}

console.log(nextDayForAWeekDay('Wed'))
*/

/*
// Discriminated Unions
type Cat = {
    type: 'cat';
    purrs: boolean
}

type Dog = {
    type: 'dog';
    barks: boolean
}

type Animal = Cat | Dog;

let cat = {
    type: 'cat',
    purrs: true
}

let dog = {
    type: 'dog',
    barks: true
}

const animalReaction = function(animal: Animal){
    switch(animal.type){
        case 'cat' :
             console.log('This animal is a cat and it purrs'); 
             break;
        case 'dog' :
            console.log('This animal is a dog and it purrs'); 
            break;    
    }
}
*/

/*
type Person = {
    name: string;
    email: string;
    age: number;
    isAdmin: boolean
}

type Name = Person['name']; // => Keying in , Index Accessed

// keyof
type NameAndEmail = Person['name' | 'age'];
type Data = Person[keyof Person]
type AgeAndIsAdmin = 'age' | 'isAdmin'
type DataTwo = Person[AgeAndIsAdmin]
*/

/*
type UserDetailsAPIResponse = {
    id: number;
    name: string;
    servicesList: {
        count: number;
        services: {
            id: number;
            name: string;
            price: number
        }[];
    };
};

type ServiceList = UserDetailsAPIResponse['servicesList'];

function fetchUserDetails(name: string) : 
Promise<UserDetailsAPIResponse>{
    return new Promise((res,rej) => {
        if(name === 'Riyad'){
            res({
                id: 23,
                name: 'Riya',
                servicesList:{
                    count: 2,
                    services:[
                        {
                            id: 1,
                            name: 'Accounting',
                            price: 49
                        },
                        {
                            id: 2,
                            name: 'Design',
                            price: 49
                        },
                    ],
                },
            });
        }else rej(new Error('Pass new a valid name'))
    })
}

const printServiceList = (services: ServiceList) : void => console.log(services);

fetchUserDetails('Riyad')
.then((res) => {
    console.log(res);
    printServiceList(res.servicesList);
})
.catch((error) => console.log(error))
*/

/*
// Keyof
type Events = {
    id: number;
    date : Date;
    type: 'indoor' | 'outdoor';
}

type Id = Events['id'];
type IdAndDate = Events['id'|'date'];

type unionOfKeyOfEVent = keyof Events; // 'id' | 'date' | 'type'
type unionOfKeyOfEvents = Events[keyof Events];

type Numeric = {
    [key: number] : string;
}

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
    [key: string] : string;
}

type NumberAndStringKeyOf = keyof NumberAndString;
*/

/*
// Mapped Types
let numbers : number[] = [1,5,6,8,10];
let stringNumbers = numbers.map((eatch) => eatch.toString());
console.log(stringNumbers)

type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekdays | 'Sat' | 'Sunday';


type NextDay = {
    [W in Weekdays] : Day
}

const nextDay : NextDay = {
    Mon : 'Tue',
    Tue : 'Wed',
    Wed : 'Thu',
    Thu : 'Fri',
    Fri : 'Sat',
}
*/

/*
type Artist = {
    id : number;
    name: string;
    bio: string;
}

const artist : Artist = {
    id : 1,
    name: 'Riyad',
    bio: 'Hey, I am Riyad'
}

type MappedArtistForEdit = {
    [Property in keyof Artist]?: Artist[Property];
  } & { id: number };


const editedArtist : MappedArtistForEdit = {
    id: 1,
    bio: 'Hello, I am Riyad'
}
*/

/*
// Conditional Types
interface Animal {
    live : () => void;
}

interface Dog extends Animal {
    woof() : void
}

type Example = Dog extends Animal ? number : string;


type isString<T> = T extends string ? true : false;

type A = isString<string>;
type B = isString<number>;
*/
