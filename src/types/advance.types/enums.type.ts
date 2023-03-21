/*
enum Roles {
   admin = 'admin',
   author = 'author',
   editor = 'editor'
}


type Perosn = {
   name:string;
   email:string;
   password:string;
   role:Roles
}


const person : Perosn = {
name: 'Riyad',
email: 'riyad.m.salem.19988@gmail.com',
password: '4141452',
role : Roles.editor
}

*/

/*
/*
enum TypeOfLibrary {
   national = 'national',
   academic = 'academic',
   public = 'public'
}
*/

/*
type TypeOfLibrary = 'national' | 'academic' | 'public';

type Book = {
   title: string;
   page: number;
   isbn : string
}
type Books = Book[];

type Member = {
   name: string;
   phone: string;
   [key: string] : string
}
type Members = Member[];

type Library = {
   name: string;
   address: string;
   numberOfBooks: number;
   type: TypeOfLibrary;
   books: Books;
   genres: string[];
   members: Members;
};

const library : Library = {
   name: 'New York Library',
   address: '24 Some Street, New York',
   numberOfBooks: 1254,
 //  type:TypeOfLibrary.national, // 'national','academic','public',
    type:'national', // 'national','academic','public',

   books:[
      {
         title: 'Harry Potter',
         page: 756,
         isbn: '9971-5-0210-0',
      },
      {
         title: 'Davinci Code',
         page: 386,
         isbn: '9971-5-0210-0',
      },
   ],
      genres: ['fiction','history','computers','poetry'],
      members: [
      {
         name: 'Riyad Salem',
         phone: '+972592290424'
      },
      {
         name: 'Mark Doe',
         phone: '+1828415682',
         email: 'mark@gmail.com'
      }
   ],
};
*/