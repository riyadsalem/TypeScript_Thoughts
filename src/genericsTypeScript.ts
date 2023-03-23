/*
const arrayFilter : number[]= [2,3].filter((item: number ) =>  item > 1 );


type FilterNoGenerics = {
   (array: number[], predicate: (item: number) => boolean): number[];
   (array: string[], predicate: (item: string) => boolean): string[];
   (array: object[], predicate: (item: object) => boolean): object[];
 };
 

 type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
 }

 // type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];
 // type Filter<T> = { (array: T[], predicate: (item: T) => boolean): T[];} 

const filter : Filter = (array: any[], predicate: Function) => {
   let result: any[] = [];
   for (let i = 0; i < array.length; i++) {
     let item = array[i];
     if (predicate(item)) {
       result.push(item);
     }
   }
   return result;
 };

 let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
 function predicate(item: number) {
   return item < 7;
 }
 
 let strings = ["cat", "bat", "rat", "mat"];
 function filterCats(item: string) {
   return item === "cat";
 }


const arrayMap : string[] = [1,2].map((itme : number) => itme.toString());

const map = <T,U>(array: T[], func: (num: T) => U) => {
   if(array.length === 0){
      return array;
   }

   let result: any[] = [];

   for(let i = 0; i < array.length; i++){
      result.push(func(array[i]))
   }

   return result;
}


const numbersForMapp = [1,2];

const converted = map(numbersForMapp, (num: any) => num.toString());

*/