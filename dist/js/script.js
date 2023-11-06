const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    
burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.experience__pracent'),
    lines = document.querySelectorAll('.experience__statistics span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
