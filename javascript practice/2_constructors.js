// we name the class
class User {
    // we call the constructor function and create parameters
    // these will be values that we wnt to be passed in and store in the the object

    constructor(first, last, e) {
        // on the right side of the below expression, the word 'first', 'last' and 'e' are the values that are getting passed in as the arguments when the object is created

        this.f = first;
        this.l = last;
        this.email = e;
        // on the left side, we have the actual keys of the object being created. Left side stores the incoming arguments
        //from the newly created object as the value for 'this
        //specific object being created   

    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l);// O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "pconnor@elevenfifty.org"}


class Player {
    constructor(name, number, averagePoints) {
        this.n = name
        this.b = number
        this.p = averagePoints
    }
}

let playerOne = new Player("jaylen", 13, 22)
console.log(playerOne.n);
console.log(playerOne.b);
console.log(playerOne.p);
console.log(playerOne);