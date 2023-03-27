/*
function FirstDecorator(name: string){
    return function(constructor: Function){
        console.log(`${name} Invoked`);
        console.log(constructor)
    }

}

@FirstDecorator('First Decorator')
class Aircraft {
    constructor(public _aircraftModel: string, private pilot: string){}

    public pilotName(){
        console.log(this.pilot)
    }

    public get aircraftModel(){
        return this._aircraftModel;
    }
}
*/

/*
enum Manufacturers {
    boeing = 'boeing',
    airbus = 'airbus'
}

interface AircraftInterface{
    _aircraftModel : string;
    pilot: string;
    origin?: string;
    manufacturer?:string;
    type?:string;
    airbusMethod?: () => void;
    boeingMethod?: () => void;
}

function Aircraftmanufacturer(manufacturer: Manufacturers){
    return (target: Function) => {
        if(manufacturer === Manufacturers.airbus){
            target.prototype.origin = 'United States of America';
            target.prototype.manufacturer = Manufacturers.airbus;
            target.prototype.type = 'Jet';
            target.prototype.airbusMethod = () => console.log(`Function performed by Airbus`);
        }else{
            target.prototype.origin = 'France';
            target.prototype.manufacturer = Manufacturers.boeing;
            target.prototype.type = 'Helicopter';
            target.prototype.boeingMethod = () => console.log(`Function performed by Boeing`);

        }
    }
}

@Aircraftmanufacturer(Manufacturers.airbus)
class Aircraft implements AircraftInterface {
    constructor(public _aircraftModel: string, public pilot: string){
      //  console.log('Aircraft Class Instantiated')
    }

    public pilotName(){
        console.log(this.pilot)
    }

    public get aircraftModel(){
        return this._aircraftModel;
    }
}

@Aircraftmanufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface {
    constructor(public _aircraftModel: string, public pilot: string){
        console.log('Helicopter Class Instantiated')
    }

    public pilotName(){
        console.log(this.pilot)
    }

    public get aircraftModel(){
        return this._aircraftModel;
    }
}


const aircraft : Aircraft = new Aircraft('Airbus A380','Johina');
const helicopter : Helicopter = new Helicopter('H380','Riyad');


console.log(aircraft);
console.log(helicopter);


// @ts-ignore
aircraft.airbusMethod ? aircraft.airbusMethod() : console.log("Method Does not Exist!");
// @ts-ignore
helicopter.airbusMethod ? helicopter.airbusMethod() : console.log("Method Does not Exist!");
*/

/*
enum Manufacturers {
    boeing = 'boeing',
    airbus = 'airbus'
}

interface AircraftInterface{
    _aircraftModel : string;
    pilot: string;
    pilotName: () => void;
    origin?: string;
    manufacturer?:string;
    type?:string;
    airbusMethod?: () => void;
    boeingMethod?: () => void;
}


function MethodDecorator(classPrototypes: Object, methodName: string, descriptor: PropertyDescriptor){
console.log(classPrototypes);
console.log(methodName);
console.log(descriptor);
descriptor.writable = false;
}

function StaticMethodDecorator(constructor: Object, methodName: string, descriptor: PropertyDescriptor){
    console.log(constructor);
    console.log(methodName);
    console.log(descriptor);
    descriptor.writable = false;
    }


class Aircraft implements AircraftInterface {
    constructor(public _aircraftModel: string, public pilot: string){
      //  console.log('Aircraft Class Instantiated')
    }

    @StaticMethodDecorator
    public static setCount () : void{
        console.log('150')
    }

    // @MethodDecorator
    public pilotName(){
        console.log(this.pilot)
    }

    public get aircraftModel(){
        return this._aircraftModel;
    }
}


const aircraft : Aircraft = new Aircraft('Airbus A380','Johina');

// aircraft.pilotName = () => console.log('Fucntion Changed');
// aircraft.pilotName();

Aircraft.setCount();
*/

/*
function ParameterDecorator(classPrototype: Object, methodName: string, index: number){
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);
}

class Aircraft{
    constructor(public _aircraftModel: string){}

    public static seatCount () : void {
        console.log('150 Seats')
    }

    
    public pilotName(name: string, @ParameterDecorator lastName: string) {
        console.log(name)
    }

    public get aircraftModel(){
        return this._aircraftModel;
    }
}
*/

/*
function PropertyDecorator(
    classPrototype: Object,
    propertyName: string
  ) {
    console.log(classPrototype);
    console.log(propertyName);
  }
  
  function AccessorDecorator(
    classPrototype: Object,
    accessorName: string,
    propertyDescriptor: PropertyDescriptor
  ) {
    console.log(classPrototype);
    console.log(accessorName);
    console.log(propertyDescriptor);
  }
  
  class Airplane {
     @PropertyDecorator
    public _aircraftModel: string;
    constructor(aircraftModel: string) {
      this._aircraftModel = aircraftModel;
    }
  
    public static seatCount(): void {
      console.log('150 Seats');
    }
  
    public pilotName(name: string, lastName: string) {
      console.log(name);
    }
  
    @AccessorDecorator
    public get aircraftModel() {
      return this._aircraftModel;
    }
  }
  */

  /*
  interface MapLocation{
    lat: number;
    long: number;
}

// V1
// function AddLocation(lat: number, long: number){
    // return (classConstructor: FunctionConstructor) => {
        // return class extends classConstructor{
            // public mapLocation : MapLocation;
            // constructor(){
                // super();
                // this.mapLocation = {lat,long}
            // }
        // }
    
    // }
// }


function AddLocation(lat: number, long: number){
    return <T extends {new (...args: any[]): {}}>(classConstructor: T) => {
        return class extends classConstructor{
            public mapLocation : MapLocation;
            constructor(...args: any[]){
                super(...args);
                this.mapLocation = {lat,long}
            }
        }
    
    }
}


@AddLocation(1.234, 1.876)
class Person{
    constructor(public name: string, public age: number){}
}

const perosn: Person = new Person('Riyad',25);
console.log(perosn)
*/