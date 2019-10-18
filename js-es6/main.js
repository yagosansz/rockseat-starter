/*
// Classes
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor() {
        super();

        this.user = 'Yago';
    }

    displayUser() {
        console.log(this.user)
    }
}

var myList = new TodoList();

document.getElementById('newtodo').onclick = function() {
    myList.add('New todo');
}

myList.displayUser();
*/

/*
class TodoList {
    constructor() {
        this.todos = [];
    }

    // Static methods are not able to 'see' what is happening outside
    // e.g.: Math class in Java!
    static addTodo() {
        this.todos.push('New todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();
*/

/*
// Const & Let

const a = 1; // Cannot re-assign a value
// b = 3; will throw an readOnlyError

const user = { name: 'Yago'}; 
// The value held by the variable is not immutable.
// To prevent this one could use Object.freeze()
user.name = 'Yoshi'; 
console.log(user);

function test(x) {
    let y = 2;
    if (x > 5) {
        console.log(x, y);
    }
}

test(10);
*/

/*
// Operations with Array
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index * 2;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
}, 0);

console.log(sum);

const filterArr = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filterArr);

const findArr = arr.find(function(item) {
    return item === 4; // returns first found element!
});

console.log(findArr);
*/

/* 
// Arrow Fuctions

const arr = [1, 3, 4, 5, 6];

const newArr = arr.map((item) => item * 3);

console.log(newArr);

const test = () => ['cheese', 'bacon', 'eggs']
// const test = () => { name: 'Yago' } // this will not work!
// const test = () => ({ name: 'Yago' });

console.log(test());
*/

/* 
// Default Parameters

const sum = (a, b = 7) => a + b;
console.log(sum(3));
*/

/* 
// Destructuring Assignment

const user = {
    name: 'Yoshi',
    age: 7,
    address: {
        city: 'Yoshi Town',
        province: 'YL'
    }
};

const { name, age, address: { city } } = user;
console.log(name, age, city);

function descUser({ name, address: { province } }) {
    console.log(name, province);
}

descUser(user);

*/

/* 

// rest/spread Operators

// REST

const user = {
    name: 'Yoshi',
    age: 7,
    company: 'Mario Bros'
};

const { name, ...rest } = user;
console.log(name, rest);

const arr = [2, 5, 7, 10];

const [a, b, ...c] = arr;
console.log(a, b, c);

function sum(...params) {
    // return params;
    return params.reduce((total, next) => total + next, 0);
}
console.log(sum(3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    name: 'Fire Flower',
    age: 7,
    company: 'Mario Bros'
};

const user2 = { ...user1, name: 'Toad'};
console.log(user2);

*/

/*
// Template Literals

const name = 'Mario';
const age = 25;
console.log(`My name is ${name} and I am ${age} years old`);
 */

 /* 
// Object Short Syntax - WOW! =D

const name = 'Luigi';
const age = 30;

const user = {
    name,
    age,
    company: 'Mario Bros'
}

console.log(user);
*/

//import mod, { sum, subtract as sub} from './functions';
import * as Ops from './functions';

console.log(Ops.sum(1, 2));
console.log(Ops.subtract(4, 2));
console.log(Ops.mod(7, 5));


