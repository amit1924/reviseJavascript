// let btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//   document.body.style.backgroundColor ='red';
//   btn.setAttribute('data', 'someValue'); // Replace 'someValue' with the actual value you want to set.
//   console.log(btn.getAttribute('data'));
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let btn = document.getElementById('btn');

//     btn.addEventListener('click', function() {
//     //   document.body.style.backgroundColor = 'red';
//       let div1 = document.createElement('div');
//       div1.innerText = 'hello world';
//       document.body.appendChild(div1);
//     });
//   });

//change id value

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     btn.id = 'button'
// })

//change class value
// let div1Element = document.querySelector('.div1');
// div1Element.className = 'div2';
// console.log(div1Element.className);

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     console.log(btn.parentElement)
//     btn.parentElement.className = 'btn'

// })

//add anoter class
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log(btn.parentElement);
//   btn.parentElement.classList.add("btn"); // Add class 'btn'
//   btn.parentElement.classList.add("btn1"); // Add class 'btn1'
// });

//Select siblings
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
// console.log(btn.previousSibling);
// })

//Event
// let form = document.getElementById("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert('form submit')
// })

//Keyboard
// let form = document.getElementById("form");
// form.addEventListener("keydown",function(event){
//     console.log('key pressed',event.key)

// })

//add elements

// let div = document.getElementById("div");
// console.log(div.parentElement)
// let unList = document.createElement("ul");
// let ul =div.appendChild(unList)
// for (let i = 0; i<=4;i++){

// let li = ul.appendChild(document.createElement('li'))
// console.log(li)
// }

// let i = 0
// while (i <4) {

//     console.log(i)
//     i++
// }
// console.log(i)

// let arr = [1,2,4,8,9]
// for(item in arr){
//     console.log(item)
// }

//for each
// let arr =[1,2,4,8,9]

// arr.forEach(item=>console.log(item))

//Filter

// let arr = [1,2,8,98]
// let arr1 =arr.filter(function(item){
//     return item % 2 == 0
// })

// console.log(arr1)

// //destructuring

// let color = ['red','blue','green', ,'black']
// color[1]='yellow'

// let [c1,c2,c3,c4] =color
// console.log(c1)
// console.log(c2)
// console.log(c3)
// console.log(c4)

//DATE method
// let date = new Date()
// console.log(date)
// let month = date.getMonth()
// console.log(month)
// let year = date.getFullYear()
// console.log(year)
// let day = date.getDate()
// console.log(day)
// let hour = date.getHours()
// console.log(hour)
// let minute = date.getMinutes()
// console.log(minute)
// let second = date.getSeconds()
// console.log(second)
// let millisec=date.getMilliseconds()
// console.log(millisec)

//Object
// let person ={
//     age: 30,
//     name: 'John',
//     email:'john@example.com'
// }

// // console.log(person.name)
// // person.name = 'amit'
// // console.log(person.name)

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// CLASS
// class Person {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//      aged() {
//         console.log(`my age is ${this.age}`);
//     }

//     id(){
//         console.log(`my id is ${this.email}`);
//     }

//     }

//     class Students extends Person {
//         constructor(name, age, email,id){
//         super(name, age, email)
//         this.id=id
//         }

//         study(){
//             console.log(`new student id is ${this.id}`)
//         }
//     }

// let person1 = new Person('Amit', 30, 'amit8800@yahoo.com');

// console.log(person1.name);
// person1.hello();
// person1.aged()
// let person2 = new Person('Rashmi', 32, 'hello@yahoo.com');
// person2.id()

// let student =new Students('Alice', 20, 'alice@example.com', '123456')
// console.log(student.name
//     )

//     student.study()

// // API
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await response.json();

//     const album = data.map((item) => {
//       console.log(item);

//       let button = document.getElementById('btn');

//       button.addEventListener("click", () => {
//         let ul = document.createElement('ul');
//         let li = document.createElement('li');
//         li.style.color='white'
//         li.style.textAlign='center'
//         li.innerText = `Album ID: ${item.albumId}, ID: ${item.id}, Title: ${item.title}, URL: ${item.url}`;
//         ul.appendChild(li);

//         ul.appendChild(li);
//         document.body.appendChild(ul);

//       });

//     });
//   }

//   getData();

//JSON file

// const getData= async ()=>{
//   const response = await fetch('txt.json')
//   const data = await response.json();
//   console.log(data);

//   const employees = data.employees
//   console.log(employees);
//   const employeeList = employees.map((item)=>{
//     console.log(item);

//     console.log(item.name);
//     console.log(item.position);
//   })

// }
//  getData()

// Chnage Object into Json string
// const person = {
//   name: 'John Doe',
//   age: 30,
//   email: 'john.doe@example.com'
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

//JSON.parse() is used to parse a JSON string and convert it back into a JavaScript object or value.
// const jsonString = '{"name":"John Doe","age":30,"email":"john.doe@example.com"}';
// const person = JSON.parse(jsonString);
// console.log(person)

// console.log(person.name);
// console.log(person.age);
// console.log(person.email);

//Spread Operator
// const arr = ['red','blue','orange','black','green','yellow']
// const spread =[...arr]
// console.log(spread)
// console.log(spread.join(' pink '))

//CallBack function
// function sum(a, b,callback1,callback2) {
//     let addition = a+b
//     console.log('The value of sum is :', addition)
//     callback1()
//     callback2()
// }

// function hello(){
//     console.log('hello')
// }

// function hi(){
//     console.log('hi')
// }

// sum(5,3,hello,hi)

//Callback using Arrow function
//Ist
// const hello =(callback)=>{
//    console.log('hello')
//    callback()
// }

// hello(()=>{
//     console.log('hi')
// })

//2nd
// const hello =(name,callback)=>{
//    console.log(`hello: ${name}`)
//    callback()
// }

// hello('Amit',()=>{
//     console.log('hi')
// })

//3rd
// const sum =(a,b,callback) => {
//     const result =a+b
// console.log(result)
// callback(result)
// }

// const hello =(result)=>(
//     console.log(`hello result is :${result}`)
// )

// sum(5,3,hello)

//Promises

// const myPromises = new Promise((resolve, reject) =>{
//     const randomNum =Math.random()
//     console.log(randomNum)
//     if(randomNum<0.5){
//         resolve("Successful")
//         console.log(resolve)
//     }else{
//         reject("Invalid random number")
//         console.log(reject)
//     }
// })

// myPromises
//          .then((result)=>{
//             console.log(result)
//          })
//          .catch((err)=>{
//             console.log(err)
//          });

//Async and Await
// const myPromises = () => {
//     return new Promise((resolve, reject) => {
//         const randomNum = Math.random();
//         console.log(randomNum);

//         if (randomNum < 0.5) {
//             resolve("Successful");
//         } else {
//             reject("Invalid random number");
//         }
//     });
// };

// async function handlePromises() {
//     try {
//         const result = await myPromises();
//         console.log(result);
//     } catch (err) {
//         console.error(err);
//     }
// }

// handlePromises();

//FUnction called within another function
// function hello(){
//     console.log('hello')

//     function hi(){
//         console.log('hi')

//     }
//     hi()
// }
// hello();

//Showing error message to console
// console.error("hello");

// console.log(document.body)
// console.log(document)
// console.log(document.firstChild)
// console.log(document.firstChildElement)
// console.log(document.lastChild)
// console.log(document.nodeName)
// console.log(document.childNodes)
// console.log(document.TEXT_NODE)
// console.log(document.COMMENT_NODE)
// console.log(document.ELEMENT_NODE)
// console.log(document.children)
//console.log(window)
// console.log(document.cookie)

//Set Cookie

// function makeCookie(name, value, daysToExpire) {
//   const date = new Date();
//   console.log(date.toUTCString());
//   let settings = date.setTime(date.getTime() + (daysToExpire* 24 * 60 * 60 * 1000));
//   console.log(settings);

//   const expires = "expires" + date.toUTCString();
//   console.log(expires);
//   document.cookie = name + "=" + value + ";" + expires + ";path=/";
//   console.log(document.cookie);
// }

// makeCookie("username", "John Doe", 7);
