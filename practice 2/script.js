// const div = document.getElementById('div');
// const btn = document.getElementById('btn');

// btn.addEventListener('keydown',(event)=>{

//     console.log(event.altKey);
//     console.log(event.metaKey);
// })

// btn.addEventListener('keyup',(event)=>{
//     console.log(event.currentTarget)
// });

// document.addEventListener('keydown',(event)=>{
//     console.log("key Pressed: " + event.key)
// });
// document.addEventListener('keyup',(event)=>{
//     console.log("key Pressed: " + event.key)
// });
// document.addEventListener('keypress',(event)=>{
//     console.log("key Pressed: " + event.key)
// });

// console.log(document.body.firstElementChild.innerText)
// console.log(document.body.firstElementChild.nextElementSibling.innerText)
// console.log(document.getElementById('div').innerText)
// console.log(document.getElementById('div').nextElementSibling.innerText)

// localStorage.setItem('username',"amit kumar")

// const username = localStorage.getItem('username');
// console.log(username)

// if (localStorage.hasOwnProperty('username')) {
//     console.log(username)
//   }

// const user = { name: 'John', age: 30 };
// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.stringify(user));

// const storedUser = JSON.parse(localStorage.getItem('user'));
// console.log(storedUser)

// const user ={
//     name: 'John',
//     age: 30,
// }

// console.log(JSON.stringify(user))

// const owner=
//     {"name":"John","age":30}

//     console.log(owner)

//open any link
// let btn = document.getElementById('btn');
// let createNew = document.createElement('a')
// console.log(createNew)

// btn.addEventListener('click',(e)=>{
// //  console.log(btn.href='https://twitter.com/')
// window.location =btn.href='https://twitter.com/'

// })

//Prevent submission of form
// let btn =document.getElementById('btn')
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
// })

//write in input box and then show on body of webpage after clicking the button
// let form = document.getElementById('form')
// let btn =document.getElementById('btn')
// let input = document.getElementById('inp')
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
// let inputValue =input.value
// let div = document.createElement('div')
// console.log(div)

// div.innerHTML=inputValue
// document.body.appendChild(div)

// })

//show directly on body of webpage after writing anything on input box
// let input = document.getElementById('inp')
// let btn = document.createElement('btn')
// input.addEventListener('input',()=>{
//     btn.addEventListener('click',(e)=>{
//         e.preventDefault()
//     })
//     let inputValue = input.value
//     console.log(inputValue)
//     let div = document.createElement('div')
//     div.innerHTML=inputValue
//     document.body.appendChild(div)
// });

// Miscallaneous
// let post =[
//     {
//         name:"Amit",
//         age:20,
//         dob:"Aug"
//     }

// ]
// // if(Array.isArray(post)){
// //     console.log(post[0].age)
// // }
// // else{
// //     console.log("error")
// // }

// // console.log(Array.isArray(post))

// console.log(post.length)
//2.
// function findSum(x,y){
//    alert(x+y)
// }

//3.

// let name = "Amit";
// console.log(name)
// console.log(name.trim())

// console.log(name[0])
// console.log(name[1])
// console.log(name.length)
// for(let i = 0; i < name.length; i++){
//     // console.log(i)
//     console.log(name[i])
// }
// let i = 0
// while(i<name.length){

//     console.log(name[i])
//     i++
// }
// console.log(name.slice(0,4))

//3.
// let hide =document.getElementById('hide');
// console.log(hide)
// let btn=document.getElementById('btn')

// btn.addEventListener("click",()=>{
//      if(hide.style.display=="none"||hide.style.display==""){
//                hide.style.display="block"
//      }
//      else{
//         hide.style.display="none"
//      }
//     //  alert("btn is working")
// })

//4.
// console.log(document.getElementsByClassName("l1"))
// console.log(document.querySelector(".l2"))

// let a = document.querySelector(".l2");
// let b = document.querySelector("div.l2");
// let div = document.querySelectorAll("div");
// console.log(div[0]);
// a.style.textAlign = "center";
// b.style.color = "red";

// div.forEach((item) => {
//   console.log(item);
//   item.style.backgroundColor = "blue";
//   item.style.fontSize = "45px";
// });

// 5.
// let arr = ["apple", "orange", "banana", "grapes"];
// let arrs = ["apple", "orange", "banana", "grapes"];

// console.log(arr.push([" guava "]))
// console.log(arr.join([" mango "]))
// console.log(arr.shift([" pineapple "]))
// console.log(arr.concat([" peas "]))
// console.log(arr.concat(arrs))

// arr.map((fruit)=>{
//   console.log(fruit)
// })

// arr.forEach((fruit) => {
// console.log(fruit);
//   console.log(fruit[3])
//   console.log(arr[3])
// });

// const [a,b,c,d] =arr
// console.log(a)
// console.log(d)

// if (arr.includes("grapes")) {
//   console.log("grapes are available");
// } else {
//   console.log("grapes are not available");
// }

// 6.
// let a =()=>console.log("working")
// a()

//Jan 2024
// let person=[
//     person1={
//     name: "John",
//     age: 22,
//     email: "john@example.com"
// },
// person2={
//     name:"Alice",
//     age: 20,
//     email: "alice@example.com"
// }]

// console.log(person[0].name)

// let arr =["name", "age", "email"]

// let [arr1, arr2,arr3] = arr

// console.log(arr1)
// console.log(arr3)

// arr.forEach((item)=>{
// //   console.log(item)
// //   console.log(item[1])
// //   console.log(item[2])

// })

// arr.map((item)=>{
//  console.log(item)
// })

// const a =20
// function get(){
//     console.log(a)
// }

// get()

// let
//         person1={
//         name: "John",
//         age: 22,
//         email: "john@example.com"
//      }

//      for(item in person1){
//         // console.log(item)
//         // console.log(`${item}: ${person1[item]}`)

//         let text ="hello"
//             text = `${text} ${person1[item]}`
//             console.log(text)
//      }

//  let arr =["banana", "orange", "apple"]
// arr.map((item)=>{
//        function get(item){
//         console.log(item)
//        }

//        get(item)
// })

// let arr =["banana", "orange", "apple"]
// arr.map((item)=>{
//        function get(a,b){
//         sum=a+b
//         console.log(item)
//         console.log(sum)
//        }

//        get(2,3)
// })

// function hello(){
//     console.log("hello world")

// }

// function hi(){
//     console.log("hi world")
// }

// hello(hi())

// callback function
// function hello(callback){
//     console.log("hello world")
//    callback()
// }

// function hi(){
//     console.log("hi world")
// }

// hello(hi)

// let hello =(callback1,callback2)=>{
//     console.log("hello world")
//     callback1()
//     callback2()
// }

// let hi =()=>{
//     console.log("hi world")

// }

// let ne =()=>{
//     console.log("new world")
// }

// hello(hi,ne)

// let hello =()=>{
//     console.log("hello world")

// }

// let hi =(callback1,callback2)=>{
//     console.log("hi world")
//     callback1()
//     callback2()

// }

// let ne =()=>{
//     console.log("new world")
// }

// hi(hello,ne)

// let hello =(callback)=>{
//     console.log("hello world")

//     callback()
// }

// let hi =()=>{
//     function hey(callback1){
//         console.log("hey world")
//         callback1()

//     }

//     console.log("hi world")
//     hey(hello)
// }

// hello(hi)

// let promise = new Promise((res,rej)=>{
//     let a =10
//     if(a===10){
//         res("value is true")
//     }
//     else{
//         rej("value is false")
//     }

// })

// promise

// .then((result)=>{
//     console.log("Resolved:",result)
// })
// .catch((err)=>{
//     console.log("object:",err)
// })

//API

// let getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //   console.log(response);

//   let data = await response.json();
//   //   console.log(data);
// };

// getData();

// API Calling

// let div = document.getElementById("div");
// let btn = document.getElementById("btn");
// let ce = document.createElement("p");
// console.log(ce);

// btn.addEventListener("click", async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //   console.log(response);

//   let data = await response.json();

//   data.map((item) => {
//     // console.log(item);
//     div.innerText += `\n \n ID:${item.id} \n  userid:${item.userId} \n Title:${item.title} \n ${item.body}`;
//   });
// });

//Object Destructuring
// let person = {
//   name: "John",
//   age: 34,
// };

// let { name, age } = person;
// console.log(`Name: ${name}`);

//Constructor Function
// function get(name, age) {
//   (this.name = name), (this.age = age);

//   console.log(`my name is ${this.name} and age is ${this.age}`);
// }

// get("Amit", 30);

//  OR

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(`my name is ${this.name} and age is ${this.age}`);
// }

// const amit = new Person("Amit", 30);

//    OR

// function Person(name, age) {
//   (this.name = name), (this.age = age);

//   this.displayInfo = () => {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   };
// }

// const amit = new Person("Amit", 30);
// amit.displayInfo();

// function hello() {
//   if (this == window) {
//     console.log("this is equal to window");
//   } else {
//     console.log("This is not equal to window");
//   }
// }

// hello();

//Prototype
// const animalProto = {
//   makeSound: function () {
//     console.log("Every animal has a sound");
//   },
//   displayInfo: function () {
//     console.log(`Every ${this.name} has a distinct proprties`);
//   },
// };

// const dog = Object.create(animalProto);
// const cat = Object.create(animalProto);

// cat.name = "Tommy";

// dog.makeSound();

cat.displayInfo();
