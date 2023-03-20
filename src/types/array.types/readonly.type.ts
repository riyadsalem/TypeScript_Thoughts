/*
let numbers : readonly number[] = [1,2];

// numbers.push(1);  // => Error

type readOnlyPerson = readonly [string,string,number];

const person : readOnlyPerson = ['riyad','salem',25];
// person = ['salem','riyad',2]; // => Error


type a = Readonly<string[]>;
type c = Readonly<[string,string,number]>;
*/