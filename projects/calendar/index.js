// function User(name, lastName) {
//     return {
//         name: name,
//         lastName: lastName,
//         get fullName() {
//             return this.name + ' ' + this.lastName;
//         },
//         set fullName(fullName) {
//             const parts = fullName.split(' ');
//             this.name = parts[0];
//             this.lastName = parts[1];
//         }
//     }
// }

// const user = new User('ivan', 'ivanov');

class User {
    name = '';
    lastName = '';

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;

        this.greeting();
    }

    greeting() {
        console.log(`Hello, I'm created`);
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }

    set fullName(fullName) {
        const parts = fullName.split(' ');
        this.name = parts[0];
        this.lastName = parts[1];
    }

}

const user = new User('ivan', 'ivanov');


