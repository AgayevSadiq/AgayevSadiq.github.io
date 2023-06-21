const box = document.getElementById('box'),
 btn = document.getElementsByTagName('button'),
 circle = document.getElementsByClassName('circle'),
 lime = document.querySelectorAll('.lime'),
 birLime = document.querySelector('.lime'),
oneLime = document.querySelector('.lime'),
wrapper = document.querySelector('.wrapper');

const div = document.createElement('div');
div.classList.add('green');
btn[2].after(div);


