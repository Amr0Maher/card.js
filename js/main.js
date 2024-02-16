// let x = 10;
// let y = '10';

// equal ===
// console.log(x === y); // true - false


// let Email = 'amrm8233@gmail.com';

// let askEmail = prompt('Enter your email please !');
// // equal ===
// console.log(askEmail.toLowerCase().trim()=== Email); //trim remove space

// let role = window.prompt('what is your role');

// if (role === 'admin') {
//     document.write('<h1>welcome admin</h1>');
// }else if (role === 'moderator') {
//     document.write('<h1>welcome moderator</h1>');
// }else if (role === 'user') {
//     document.write('<h1>welcome user</h1>')
// }
// else {
//     document.write('<h1>not welcomed</h1>')
// }

// let result = prompt('enter your number');

// let num1 = 90;
// let num2 = 80;
// let num3 = 70;
// let num4 = 'مقبول';
// //  // if
// // if (result >=num1) {
// //     document.write('excellent');
// // }else if (result >= num2) {
// //     document.write('very good');
// // }else if (result >= num3) {
// //     document.write('good')
// // }else {
// //     document.write('bad')
// // };

// switch
// switch (role) {
//     case 'admin':
//         document.write('hello');
//             break;
//     case 'user':
//         document.write('hi');
//             break;
//     case 'moderator':
//         document.write('hello mr:Amr');
//             break;
//     default :
//         document.write('hhhhhh');
// };



//  start , condition ; step
// for(i = 0 ; i <= 10 ; i++)
// {
//     console.log(i);
//     console.log('world');
//     console.log('break _____');
// };

// for (i = 5 ; i >= 0 ; i--)
// {
//     console.log(' amr: '+i);
// }


// let Names = ['amr', 'noor' , 'maher' , 'maher'];

// Names.push('eman');

// for(n = 0 ; n < Names.length ; n++)
// {
//     console.log(`names:${Names[n]}`);
// };


// let user = ['amr', 'noor' , 'maher'];
// let cars = ['bmw', 'mercedes' , 'honda'];
// let models = [2020,2021,2022,2023];

// // user loop
// for(u = 0 ; u < user.length ; u++)
// {
//     console.log(`user:${user[u]}`);
//     // cars loop
//     for (c = 0 ; c < cars.length ; c++)
//     {
//         console.log(`cars:${cars[c]}`);
//         // models loop
//         for (m = 0 ; m < models.length ; m++)
//         {
//             console.log(`models:${models[m]}`);
//             console.log(' ');
//         };
//     };
// };

// let User = ['amr','maher', 1 , 2 , 3 , 'ali','ahmed','ibrahem','atia'];

// split a number from the array
// for (i = 0 ; i < User.length ; i++) {
//         if (User[i] == 'ahmed') {
//             break;
//         }
//             console.log(User[i]);
// };

// let a = 0;
// while(a < 3)
// {
//     document.write('<h1>hello world</h1>')
//     a++
// };

// do {
//     document.write('<h1>hello world</h1>')
//     a++
// }while(a < 3)

// function hello(name){
//     console.log('hello '+ name);
// };
// hello('amr');

// calc age
// function CalcAge(Age) {
//     let result = Age * 365;
//     console.log(result);
// };
// CalcAge(24);
// CalcAge(30);
// CalcAge(40);

// add one number
// for (a = 0 ; a <= 10 ; a++ ) {
//     console.log(a);
// }

// // remove one number
// for (i = 9 ; i >= 0 ; i-- ) {
//     console.log(i);
// }

// for (v = 0 ; v <= 10 ; v++) {
//     console.log(`ahmed ${v}`);
// };

// for (m = 10 ; m >= 0 ; m--) {
//     console.log(`ahmed ${m}`);
// };

// let names = ['amr', 'noor' , 'maher' , 'ali' ];

// for(i = 3 ; i > names.length ; i--) {
//     console.log(names[i]);
// }

// let Cars = ['BMW', 'Mercedes' , 'Honda'];
// let Models = [2020,2021,2022];
// let User = ['amr','noor','maher'];
// // cars loop
// for (c = 0 ; c < Cars.length ; c++) {
//     // show in console
//     console.log(`cars: ${Cars[c]}`)
//     // models loop
//     for (m = 0 ; m < Models.length ; m++ ) {
//         //show in console
//         console.log(`models: ${Models[m]}`);
//     }
//     for(u = 0 ; u < User.length ; u++) {
//         console.log(`user: ${User[u]}`);
//     }
//     console.log('-------');
// };




// for (i = 0 ; i < names.length ; i++ ) {
//     if( names[i] == 3) {
//         break;
//     }
//     console.log(names[i]);
// }

// let a = 0
// let b = 0
// while (a < names.length) {
//     console.log(names[a]);
//     a++
// }

// do{
//     console.log(names[b]);
//     b++
// }while (b < names.length)

// let names = ['amr' ,1,2,3, 'noor', 'maher'];

// function ClacAge (age)
// {
//     let result = age * 265;
//     console.log(result);

// };
// ClacAge(24);
// ClacAge(18);
// ClacAge(70);


// function FunName (price , taxes , ads) {
//     let product = price + taxes;
//     let result = product + ads;
//     console.log(result);
// };
// FunName(200,2.5,10);
// FunName(400,2.0,40);


// function FunName (price , taxes , ads) {
//     let product = price + taxes;
//     let result = product + ads;
//     return result;
// };
// let ResultAns = FunName(100,100,100);
// console.log(ResultAns);


// hoisting

// var a;
// console.log(a); // Undefined
// a = 6;


// let a;
// console.log(a); // Error
// a = 6;


// hoisting

// Declaration
// console.log(hello()); // Call
// function hello(){
//     return 1;
// };


// Expression
// let Hello = function () {
//     return 2;
// };
// console.log(Hello()); // Call


// scope and self invoked

// global





// local
// for (let i = 0; i < 10;i++ ){
//     console.log(i);
// };

// global
// for (var a = 10; a > 0;a-- ){
//     console.log(a);
// };

// function that calls her self !!
// (function () {
//     // var x = 1;
//     // console.log(`hello ${x}`);
// })();
// console.log(x); // Error !!


// console.log(x());
// function x() {
//     function y() { return 1 };
//     return y();
//     function y() { return 0 };
// };

// for example

// this is how js well read it
// Declaration !!
// function x() {
//     function y() { return 1 };
//     return y();
//     function y() { return 0 }; // the answer is 0 !!
// };
// console.log(x());


// arguments
// function hello(name = '') {
//     console.log(`name: ${name}`);
// };
// hello('amr');

// function CalcAge(age = 0) {
//     console.log(age * 365);
// };
// CalcAge(23);


// // important
// function Calc(...args) {
//     let result = 0;
//     for (let i = 0; i < args.length; i++){
//         result += args[i];
//     };
//     console.log(result);
// };
// Calc(1, 2)



//  arrow function
// let x = () => {
//     return 1;
// };
// console.log(x());

// object data type !!
// let car = {
//     // name && property
//     title: 'bmw',
//     model: 2020,
//     color: ['red', 'black', 'blue', 'green'],
//     hello: function () {
//         return 'hello'
//     }
// };
// console.log(car.title);
// console.log(typeof car);
// console.log(car.color[0]);
// console.log(car.hello());

// let user = {
//     // property
//     firstName: 'amr',
//     lastName: 'maher',
//     Email: 'amrm80233@gmail.com',
//     age: 14,
//     skills: ['html', 'css', 'js', 'bootstrap'],
//     active: false,
//     phoneNumber: {
//         first: '01019762658',
//         second: '01019672658',
//     },
//     address: {
//         egypt: 'cairo',
//         uae: 'Dubai'
//     },
//     // method
//     isActive: function () {
//         if (user.active === true) {
//             console.log('welcome');
//         } else {
//             console.log('not welcome');
//         };
//     },
//     getAge: function () {
//         if (user.age >= 18) {
//             console.log('yes');
//         } else {
//             console.log('no');
//         }
//     },
// };
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.address);
// console.log(user.phoneNumber);
// console.log(user.age);
// console.log(user.skills[0]);
// console.log(user.skills[1]);
// console.log(user.skills[2]);
// console.log(user.skills[3]);
// console.log(user.isActive(true));
// console.log(user.getAge());

//  create object
// let user = {
    
// };
//  add a name in the object
// user.name = 'ahmed';
// console.log(user.name);
// //  add a function in the object
// user.hello = function () {
//     return 'hello';
// };
// user.hi = function () {
//     return 'hi'
// };
// console.log(user.hello());
// console.log(user.hi());

//  this keyword
"use strict"
// let user1 = {
//     name: 'Amr Maher',
//     GetName: function () {
//         return `Hello ${this.name}`
//     }
// };
// console.log(user1.GetName());


// let user2 = Object.create(user1)
// user2.name = 'Amr Maher Ali';
// user2.age = 24;
// user1.getAge = function () {
//     return `age ${this.age}`
// };
// console.log(user2.name);
// console.log(user2.age);
// console.log(user2.getAge());
// console.log(user2.GetName());


"use strict"
// function hello() {
//     return this;
// };
// console.log(hello());

//  object create !!
// let user1 = {
//     FirstName: 'amr',
//     lastName: 'maher',
//     getName: function () {
//         return `hello ${this.FirstName}`
//     }
// };
// user2.FirstName = 'ahmed';
// //  add object into a new object !!
// let user2 = Object.create(user1);
// user2.FirstName = 'ahmed';


// Object.assign
// let a1 = {
//     num1: 1,
//     hello: function () {
//         return 'hello'
//     }
// };
// let a2 = {
//     num2: 2
// };
// let a3 = {
//     num3: 3
// };
// // assign an old object to a new object
// let a4 = Object.assign(a1, a2, a3, {
//     name: 'ahmed',
//     age: 24
// });
// console.log(a4);

//  select elements

//  select element by Id
// let head = document.getElementById('head');
// head.innerText = 'hello from js file';
// head.style.color = 'red';
// head.style.fontSize = '20px';
// head.style.textTransform = 'upperCase';
// head.style.fontFamily = 'arial'
// head.style.textAlign = 'center';
// console.log(head);


// select element by className
// let head2 = document.getElementsByClassName('head')[2];
// head2.style.color = 'red';
// head2.style.fontSize = '20px';
// head2.style.textTransform = 'upperCase';
// head2.style.fontFamily = 'arial'
// head2.style.textAlign = 'center';
// console.log(head2);

// select element by tagName
// let head3 = document.getElementsByTagName('h1')[0];
// head3.style.color = 'red';
// head3.style.fontSize = '20px';
// head3.style.textTransform = 'upperCase';
// head3.style.fontFamily = 'arial'
// head3.style.textAlign = 'center';
// console.log(head3);

// select element by querySelector
// let head4 = document.querySelector('h1');
// head4.style.color = 'red';
// head4.style.fontSize = '20px';
// head4.style.textTransform = 'upperCase';
// head4.style.fontFamily = 'arial'
// head4.style.textAlign = 'center';
// console.log(head4);

// select element by querySelector
// let head45 = document.querySelectorAll('h1')[0];
// head5.style.color = 'red';
// head5.style.fontSize = '20px';
// head5.style.textTransform = 'upperCase';
// head5.style.fontFamily = 'arial'
// head5.style.textAlign = 'center';
// console.log(head5);


// let body = document.body;

// let img = document.images;
// img.src;
// img.alt = 'alt'
// console.log(img.href);

// let link = document.links;
// link.href = 'www.facebook.com';

// let title = document.title;
// title = 'amr';
// console.log(title);

// let form = document.forms;
// form.


//  attribute

// let img = document.getElementById('img');
// // set attribute
// img.id = 'img2';
// img.className = 'test';
// img.src = 'images/illustration-grow-together.svg';
// img.title = 'title';

// //  add attribute
// img.setAttribute('alt2', 'amr');
// // remove Attribute
// img.removeAttribute('title')

// //  get attribute
// console.log(img.id);
// console.log(img.title);
// console.log(img.alt);
// console.log(img.className);
// console.log(img.src);
// console.log(img.hasAttribute('src'));


//  inner and outer
// let container = document.getElementById('container');
// console.log(container);


//  get
// container.outerHTML = '<p>hello</p>';
// container.innerHTML = '<p>hello</p>';

//  set
// container.innerText = '<p>hello</p>';
// container.outerText = '<p>hello</p>';


//  sibling and parent
// let element = document.getElementById('first');
// element.innerHTML = 'amr';
// element.nextElementSibling.innerHTML = 'maher';
// element.parentElement.remove()

// let element2 = document.getElementById('second');
// element2.nextElementSibling.innerHTML = 'ali';

// console.log(element.previousElementSibling);
// console.log(element.nextElementSibling);
// console.log(element.parentElement);


//  dom Css style
// let container = document.getElementById('container');
// console.log(container);
// container.innerHTML = '<p>hello world</p>';

// container.style.backgroundColor = 'red';
// container.style.color = '#444';
// container.style.padding = '10px';
// container.style.borderLeft = '10px solid black';
// container.style.borderRight = '10px solid black';
// container.style.borderRadius = '8px';

// container.style.removeProperty('color');


//  create elements
// let container = document.createElement('div');
// let head = document.createElement('h1');
// let img = document.createElement('img');


// //  add content
// let content = document.createTextNode('title');
// head.appendChild(content);
// //  img style
// img.src = '/images/logo.svg';
// img.style.width = '20%';
// img.style.height = '20%';

// //  add the element
// container.appendChild(head);
// head.style.color = 'orange';
// container.appendChild(img);
// document.body.appendChild(container);
// container.style.backgroundColor = 'black'
// container.style.textAlign = 'center';


// cards projects
let names = ['amr', 'noor', 'maher', 'ali'];
let ages = [20, 23, 25, 26];
//  card
let container = document.createElement('div');
document.body.appendChild(container)
container.style.textAlign = 'center';

function element(names,ages) {
    //  elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    // add content
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = '/images/illustration-your-users.svg';
    title.appendChild(head);
    age.appendChild(ageContent);

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
    // style elements
    //  card style
    card.style.width = '200px';
    card.style.backgroundColor = '#444'
    card.style.color = '#fff'
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    // img style
    img.style.width = '100%';
};
for (let i = 0; i < 4;i++) {
    element(names[i],ages[i]);
}
