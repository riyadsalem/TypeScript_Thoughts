/*
let a : number[] = [1,2,3]
let b : Array<string> =  ['riyad','salem']
let c : (string | number )[] = ['riyad',1]


type Airplane = {
   flightNumber: string;
   airplaneMode: string;
   dateOfDeparture: string;
   timeOfDeparture: string;
   from: string;
   to:string;
   seats: {
      [key: string] : string; 
   }
};

type Airplanes = Airplane[] ;


const airplanes : Airplanes = [
   {
      flightNumber: 'SG102',
      airplaneMode: 'A380',
      dateOfDeparture: '01/12/2022',
      timeOfDeparture: '23:10',
      from: 'JFK',
      to:'DCA',
      seats:{
         "10A" : 'Riyad Salem',
         "10B" : "Johan Jacobs",
      }
   },
   {
      flightNumber: 'SG102',
      airplaneMode: 'A380',
      dateOfDeparture: '01/12/2022',
      timeOfDeparture: '23:10',
      from: 'JFK',
      to:'DCA',
      seats:{
         "10A" : 'Riyad Salem',
         "10B" : "Johan Jacobs",
      }
   }
]
*/