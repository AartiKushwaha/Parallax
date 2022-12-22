let text = document.getElementById('text');
let sun = document.getElementById('sun');
let mountain = document.getElementById('mountain');
let cloud = document.getElementById('cloud');
let man = document.getElementById('man');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    sun.style.top = value * -1.5 + 'px';
    sun.style.left = value * 1.2 + 'px';
    cloud.style.top = value * -0.4 + 'px';
    mountain.style.top = value * -0.2 + 'px';
})