/* PART A */
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }

}

class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/* PART B */
const users = [  
    { name: 'Diego', age: 23, company: 'Rocketseat' },  
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },  
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(function(user) {
    return user.age;
});

const filterUser = users.filter(function(user) {
    return user.age > 18 && user.company === 'Rocketseat';
});

const findCompany = users.find(function(user) {
    return user.company === 'Google';
});

const multipleOps = users.map(function(user) {
    user.age = user.age * 2;
    return user;
}).filter(function(user) {
    return user.age <= 50;
});

console.log(ages, filterUser, findCompany, multipleOps);

/* PART C  - Convert to Arrow Function */

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item + 10);

const user = { name: 'Yoshi', age: 7 };
const displayAge = (user) => user.age;
console.log(displayAge(user));

const name = 'Toad';
const age = '1000';

const displayUser = (name = 'Diego', age = 18) => ( { name, age } );
console.log(displayUser(name, age));
console.log(displayUser(name));

const promise = () => new Promise((resolve, reject) => resolve());

/* PART D */

const company = {
    name2: 'Mario Bros',
    address: {
        city: 'The City',
        province: 'The Province'
    }
}

const { name2, address: { city, province } } = company;
console.log(name2, city, province);

function showInfo({ name, age }) {
    return `${name} is ${age} years old.`;
}

console.log(showInfo(user));

/* PART E - rest */

const arr3 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr3;
console.log(x, y);

function sum(...arr) {
    return arr.reduce((total, next) => total + next, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6))
console.log(sum(1, 2));

/* PART E - spread */

const user1 = {
    name: 'Yago',
    age: 15,
    address: {
        city: 'Hamilton',
        province: 'ON',
        country: 'Canada'
    }
}

const user2 = { ...user1, name: 'John' };
const user3 = { ...user1, address: { ...user1.address, city: 'Toronto' } };
console.log(user2);
console.log(user3);

/* PART F - Object Short Syntax*/

const name4 = 'Yoshi';
const age4 = '9';

const user4 = {
    name4,
    age4,
    city: 'Hamilton'
}

console.log(user4);