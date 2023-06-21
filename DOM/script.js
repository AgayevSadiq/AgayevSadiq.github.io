const box = document.getElementById('box');
console.log(box);

const btn = document.getElementsByTagName('button');
console.log(btn[2]);

const circle = document.getElementsByClassName('circle');
console.log(circle[2]);

const lime = document.querySelectorAll('.lime');
console.log(lime[2]);

lime.forEach(item =>{
console.log(item);
} )

const birLime = document.querySelector('lime');
console.log(birLime); 