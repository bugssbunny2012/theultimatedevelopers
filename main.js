
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu) menu.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links&&links.classList.remove('open')));
