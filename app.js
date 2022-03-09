const bars = document.querySelector('.fa-bars');
const dropDown = document.querySelector('.drop-down');
const closeMenu = document.querySelector('#close-menu');
bars.addEventListener('click', ()=> {
  dropDown.style.display = 'flex';
});

closeMenu.addEventListener('click', ()=>{
  dropDown.style.display = 'none';

})