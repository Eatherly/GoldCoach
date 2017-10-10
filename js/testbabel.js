/**
 * Created by Администратор on 8/5/2017.
 */


const PI=3.14
//PI=3.14158


let arr = [1,2,3];
let arr2 = [4,5,6];
let newArr = [...arr,...arr2];

console.log(newArr);

function test(newArr) {
    console.log(arguments.length);
    for(let i = 0 ; i<arguments.length ; i++){
        console.log(arguments[i]);
    }

}
test(newArr);//?
test(...newArr);

let name = "Andrey";
//let lastName = "Spirin"
let age =30;

console.log(`My name is ${name} I am ${age} years old`);


function sum(a,b) {
    console.log(`${parseInt(a) + parseInt(b)}`);

}
sum("1","22");

console.log(toUpp `hello ${name}`);

function toUpp(literals ,val) {
    return literals[0].toUpperCase() + val.toUpperCase();

}

function fullName(name = "USEr" , lastName = "User") {
    console.log(`Your full name ${name} ${lastName}`);
}
fullName('A','S');
fullName();


function sum(a) {
    Array.prototype.forEach.call(arguments, function(value) {
      console.log(value);
    });

}
sum(1,2,3,4,5,6,7);

function sum2(...array) {
    array.forEach(function(value){
        console.log(value);
    });

}
sum2(1,2,3,4,5,6,7);

let cars = ['audi' , 'bmw' , 'volvo'];

for(let car in cars){
    console.log(car);
    console.log(cars[car]);
}

for (let newcar of cars){
    console.log(newcar);
}

cars.forEach(function(item, i, arr){
    console.log(i+ ": " + item + " (array:" + arr + ")");
});
let volvo =cars.filter(function(car){
    return car == 'volvo';
});
console.log(volvo);

let carLengths =cars.map(function(car2){
    return car2.length;
});
console.log(carLengths);

var arr3 = [1, -1, 2,-2, 3];

function isPositive(number) {
    return number >0 ;
}

console.log(arr3.every(isPositive));
console.log(arr3.some(isPositive));


let numbers = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
let newnumbers = numbers.reduce(function(previousValue , currentItem) {
   return  previousValue + currentItem;
    console.log(previousValue);
    console.log(previousValue);
});
console.log(newnumbers);
let newnumbersRight = numbers.reduceRight(function(previousValue , currentItem) {
    return  previousValue + currentItem;

});
console.log(newnumbersRight);




var context = {foo: "bar"};

function returnFoo(){
    return this.foo;
}

var bound =returnFoo.bind(context);
console.log(bound());

let name3 = "A",
    lastName = "S",
    age3 = 31;

let user = {
    name : name3,
    lastname: lastName,
    age : age3,
    hello :function() {
        console.log('hellp');

    }
};
console.log(user.lastname);

let newUser23 = {
    name,
    lastName,
    age,
    hello(){
        console.log('heloo2');
    }
}
console.log(newUser23.lastName);
let animal = {
    walk(){
        console.log("I'm walking");
    }
};
console.log(animal.walk())
let rabbit = {
    __proto__:animal,
    walk() {
        console.log(super.walk);
        super.walk();
    }
};


rabbit.walk();



var Person={
    firstname : "Andrey",
    lastName : "S",
    birthDate : new Date("06-06-1984"),
    gender: "male",
    getAge : function() {
        let today = new Date();
        let diff =today.getTime() - this.birthDate.getTime();
        let year =1000 *60 *60 *24* 365;
        return Math.floor(diff/year);

    },
    toString : function(){
        return this.firstName + " "+ this.lastName +" "+ this.getAge() +" "+ this.gender;
    }
}







let User = Object.create (Person);
  User.firstName = "Bob",
      User.lastName = "S",
      User.birDate = new Date ('06-06-1994');
  console.log(User.toString());
  console.log(User.__proto__);

let User2 = Object.create (Person);
User.firstName = "Serg",
    User.lastName = "C",
    User.birDate = new Date ('06-06-1964');
console.log(User.__proto__ === Person);

class newUser3 {
    constructor(firstName , lastName , birthDate , gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date (birthDate);
        this.gender = gender;
    };
     getAge(){
         let today = new Date();
         let diff = today.getTime() - this.birthDate.getTime();
         let year =1000 *60 *60 *24* 365;
         return Math.floor(diff/year);
     };
    toString (){
    return this.firstName + " "+ this.lastName +" "+ this.getAge() +" "+ this.gender;
}
}
let newUserAndrey = new newUser3("Andrey",'S', '10-07-1986', 'male');
console.log(newUserAndrey.getAge());
console.log(newUserAndrey.toString());
console.log(newUserAndrey.__proto__);

var Person2={
    firstName : "Andrey",
    lastName : "S",
    birthDate : new Date("06-06-1984"),
    gender: "male",
    getAge : function() {
        let today = new Date();
        let diff =today.getTime() - this.birthDate.getTime();
        let year =1000 *60 *60 *24* 365;
        return Math.floor(diff/year);

    },
    toString : function(){
        return this.firstName + " "+ this.lastName +" "+ this.getAge() +" "+ this.gender;
    },
    extend : function(config) {
        var tmp = Object.create(this);
        for (let key in config){
            if (config.hasOwnProperty(key)){
                tmp[key] = config[key];
            }
        }
        return tmp;
    }

    };
var Boss = Person2.extend({
    firstName: 'Boss',
    job: "Boss",
    subject : "IT",
    yearExp : 10,
    toString : function(){
        return this.firstName + " "+ this.lastName +" "+ this.getAge() +" "+ this.gender+" "+ this.subject;
    }
});
console.log(Boss.toString());
console.log(Boss.__proto__ === Person2);

var BigBoss = Boss.extend({
    firstName : "I am",
    lastName : "Big",
    foolName: function() {
        return this.firstName + " "+ this.lastName +" "+"Boss"

    },
    yearExp : 25,
    gender : 'female',
    toFoolString : function() {
        return this.firstName + " "+ this.lastName +" "+ this.foolName()+ ' ' + this.gender + ' ' + this.subject;
    }
})
console.log(BigBoss.toString());
console.log(BigBoss.toFoolString());
console.log(BigBoss.__proto__ === Boss);
console.log(Person2.isPrototypeOf(Boss));
console.log(Person2.isPrototypeOf(BigBoss));
console.log(Boss.isPrototypeOf(BigBoss));
console.log(Person2.toString());


class newlittleUser extends newUser3{
    constructor(firstName , lastName , birthDate , gender, cars){
        super(firstName , lastName , birthDate , gender);
        this.cars =cars;
    };
    thisMyNewCar(){
 return this.firstName + " "+ this.lastName +" "+ this.getAge()+ ' ' + this.gender + ' ' + this.cars;
    }

}

var testt = new newlittleUser("Andrey" , "S" , "10-07-1986" , "male" , "Ford");
console.log(testt.thisMyNewCar());
console.log(testt.toString());


let ClassExpressions = class{
    sayHi(){
        alert("Hello");
    };
};
new ClassExpressions().sayHi();