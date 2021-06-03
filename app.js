// console.log("hello!")
// const myElement = document.getElementById('top-section');
// console.log(myElement);

const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const middleSection = document.getElementById('middle-section');
const colorField = document.getElementById('color-field')
const topSection = document.getElementById('top-section');
const btmSection = document.getElementById('bottom-section');
const pronounBtn = document.getElementById('pronoun-btn');
const pronounField = document.getElementById('pronoun-input');
const nameSpan = document.getElementById('name');
const pronounSpan =document.getElementById('pronoun');

submitBtn.addEventListener('click', ()=>{
    topSection.style.backgroundColor = colorField.value;
    btmSection.style.backgroundColor = colorField.value;
    nameSpan.textContent = inputField.value;
})

pronounBtn.addEventListener('click', ()=>{
    pronounSpan.textContent = pronounField.value;
})