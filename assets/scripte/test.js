const date = new Date().getDay();
let speicher;
let leben = 1;

console.log(date);
console.log(speicher);
console.log(leben);

function setzeTag() {
    leben = 10; 
    speicher = date;
};

setzeTag();

console.log(date);
console.log(speicher);
console.log(leben);