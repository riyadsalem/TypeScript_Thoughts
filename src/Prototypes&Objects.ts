/*
const book = {
    title : 'This Title',
    read () { console.log(this) }
}

book.read(); 

book.stopReading = function() { console.log(this); }

book.stopReading();

function watchMovie() {
    console.log(this);
}

watchMovie();
*/

/*
const book = {
    title : 'This Title',
    authors: ['Riyad','John','Rob'],
    read () { console.log(this) },

    printAuthors () : void {
        this.authors.forEach(function (author){
            console.log(this.title, '-', author);
        }, this)
    },

    printAuthorsTwo () : void {
        this.authors.forEach( (author) => {
            console.log(this.title, '-', author);
        })
    }

}

book.printAuthors();
book.printAuthorsTwo();
*/

/*
class User {
    private points : number = 0;
    constructor(public name : string, public email: string) {
    }

    login() : void {
        console.log(this.name , 'Has logged in');
    }

    logout() : void {
        console.log(this.name , 'Has logged out');
    }

    addPoint() : void {
        this.points++;
        console.log('total points', this.points);
    }

}

const user : User = new User('Riyad','._.@gmail.com');

console.log(user)
*/

/*
type UserThis = {
    name: string;
    email: string;
    points?: number;
}

type AdminUserThis = UserThis & {
    peopleReporting?: number;
}

function User(this: UserThis, name: string, email: string){
    this.name = name;
    this.email = email;
    this.points = 0;

   // this.login = function() { console.log(this.name , 'Has logged in') };
   // this.logout = () => { console.log(this.name , 'Has logged out') };
   // this.addPoint = () => { this.points++; console.log('total points', this.points) };
}

User.prototype.login = function() { 
    console.log(this.name , 'Has logged in') 
}

User.prototype.logout = function() { 
    console.log(this.name , 'Has logged out')
}

User.prototype. addPoint = function(){
    this.points++;
     console.log('total points', this.points)
}

function AdminUser(this: AdminUserThis, name: string, email: string, peopleReporting: number){
   // User.call(this,name,email)
    User.apply(this,[name,email])
    this.peopleReporting = peopleReporting
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.updatePeopleReporting = function(newNumber: number) {
    this.peopleReporting = newNumber;
    return this.peopleReporting;
}

const user = new User('Riyad', '._.@gmail.com');
console.log(user);

const adminUser = new AdminUser('Mark','._-_.@gmail.com', 10);
console.log(adminUser);
console.log(adminUser.updatePeopleReporting(2));
*/

/*
const book2 = Object.create({
    title: 'The Title',
    page: 200,
    author: 'Riyad'
})

console.log(book2)

const book3 = new Object();
book3.title = 'Book2 title';
book3.pages = 250;
book3.author = 'Mrk';

console.log(book3)
*/

/*
interface Book {
    title: string;
    page: number;
    author: string
}

const book = {
    title: 'The title',
    page: 10,
    author: ['Riyad']
}

console.log(Object.getOwnPropertyDescriptor(book, 'title'));
*/

/*
const book = new Object();

Object.defineProperty(book, 'title', {
    value: 'This is the title of the book',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(book, 'author', {
    value: 'This is the title of the book',
    writable: false,
    enumerable: true,
    configurable: true
});

book.author = 'Mark';

console.log(book)
*/
