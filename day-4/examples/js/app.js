// console.log('Hey there!');
// console.error('Error here!');
// console.warn('Warning here!');

// window object 
// console.log(window);

// window.alert('okay');
// alert('okay');

// document object 

// console.log(window.document);
// console.log(document);

// DOM : document object model
//parent child tree

// variables 
// var, let, const 

// var name = "nazmulrobin.com";

// #var
// for(var i = 1; i<=10; i++){
//     console.log(i);
// }

// console.log(i);

// #let
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// console.log(i);

// #const 
// const name = 'robin';
// console.log(name);

// name='hey!';
// console.log(name);

// let name = 'robin';
// console.log(name);

// name = 'nazmul';
// console.log(name);

let name = 'robin'; //string
let phone = 12345; //number
let tasks = ['task 1', 'task 2', 'task 3']; //array; in js array is also object

//object
let meetings = {
    client: 'client 1',
    isCompleted: true //boolean : true or false
}


// console.log(typeof(name));
// console.log(typeof(phone));
// console.log(typeof(tasks));
// console.log(typeof(meetings));

// { 0: name1, 1: name 2} 
//{ index1: name1, index2: name 2} 


//array push, pop, unshift, shift
// tasks.push('task 4'); //adds in the end
// console.log(tasks);

// tasks.pop(); //removes from the end
// console.log(tasks);

// tasks.shift(); //removes from the beggining
// console.log(tasks);

// tasks.unshift('first item'); //adds in the beginning
// console.log(tasks);

// tasks[1] = 'any name';
// console.log(tasks);

// console.log(meetings.client);
// meetings.client = 'client name changed';
// console.log(meetings.client);

// console.log('Hello ' + name);
// console.log(`Hello ${name}. Your phone is ${phone}.`);
// console.log('Hello' + name + '. Your phone is' + phone + '.');

//index of
// let indexItem = tasks.indexOf('task 2');
// console.log(indexItem);

// name = 'nazmul';
// if(name == 'robin'){
//     console.log('hey robin');
// }else {
//     console.log('you are not robin');
// }

// let number = 5;

// while(number < 10){
//     console.log(number);
//     number++;
//     // number= number +1;
// }

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// console.log(tasks.length);
// for(let i=0; i<tasks.length;i++){
//     console.log(tasks[i]);
// }

//forEach
// tasks.forEach(function(task){
//     console.log(task);
// });

//map
let toDoList = [
    { name: 'task 1', isCompleted: true },
    { name: 'task 2', isCompleted: false },
    { name: 'task 3', isCompleted: false },
    { name: 'task 4', isCompleted: false },
    { name: 'task 5', isCompleted: true },
]

// console.log(toDoList);

// let toDoTasks = toDoList.map(function(toDo){
//     return toDo.name;
// })

// console.log(toDoTasks);

// let completedTasks = toDoList.filter(function(toDo){
//     return toDo.isCompleted;
// });

// console.log(completedTasks);

// #functions 
// function showTasks(tasks) {
//     tasks.forEach(function (task) {
//         console.log(task);
//     });
// }


// names = ['name 1', 'name 2', 'name 3'];
// showTasks(names);

// showTasks(tasks);

//Dom manipulation
// let nameInput = document.querySelector('#name');
// console.log(nameInput);

// console.log(document.querySelector('.javascript-tutorial p').innerHTML);

// console.log(document.querySelector('.javascript-tutorial p').innerText);

// let pText = document.querySelector('.javascript-tutorial p').innerText = 'Hey';
// console.log(pText);

// console.log(document.querySelectorAll('.javascript-tutorial p').length);

// document.getElementById('name').value = 'Great';

let subBtn = document.getElementById('submit');
subBtn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(e.target.className);
    let nameVal = document.getElementById('name').value;
    console.log(nameVal);
});