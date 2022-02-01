const number1 = document.getElementById('number1'),
      number2 = document.getElementById('number2'),
      number3 = document.getElementById('number3'),
      number4 = document.getElementById('number4'),
      number5 = document.getElementById('number5'),
      number6 = document.getElementById('number6'),
      number7 = document.getElementById('number7'),
      number8 = document.getElementById('number8'),
      number9 = document.getElementById('number9'),
      number0 = document.getElementById('number0'),
      anzeige = document.getElementById('anzeige'),
      aufgabe = document.getElementById('aufgabe'),
      reset = document.getElementById('reset'),
      enter = document.getElementById('enter'),
      minus = document.getElementById('minus');
let ergebnis = 0;

// Zufallzahl generieren und ausgeben
function randomLv1() {
    const random1 = Math.round(Math.random() * 10 + 0.5),
          random2 = Math.round(Math.random() * 10 + 0.5),
          operator = ['+', '-'],
          random3 = Math.floor(Math.random() * operator.length),
          ausgabe = operator[random3];

    if ( random3 === 0) {
        aufgabe.innerHTML = `${random1} + ${random2}`;
        return ergebnis = random1 + random2;
    } else if ( random3 === 1 ) {
        aufgabe.innerHTML = `${random1} - ${random2}`;
        return ergebnis = random1 - random2;
    };
};

// Ergebnis eingeben und zwischen speichern
function meinErgebnis() {
    let vergleich = ergebnis === parseFloat(anzeige.innerText);
    
    if ( vergleich === true ) {
        aufgabe.innerHTML = 'Richtig';
        anzeige.innerHTML = '';
        setTimeout( randomLv1, 2000 );
    } if ( vergleich === false ) {
        aufgabe.innerHTML = `${ergebnis}`;
        anzeige.innerHTML = '';
        setTimeout( randomLv1, 2000 );
    }
}

enter.addEventListener('click', meinErgebnis);


// Zahlen in der Anzeige eingeben
number1.addEventListener('click', (event) => {
    anzeige.innerHTML += 1;
});

number2.addEventListener('click', (event) => {
    anzeige.innerHTML += 2;
});

number3.addEventListener('click', (event) => {
    anzeige.innerHTML += 3;
});

number4.addEventListener('click', (event) => {
    anzeige.innerHTML += 4;
});

number5.addEventListener('click', (event) => {
    anzeige.innerHTML += 5;
});

number6.addEventListener('click', (event) => {
    anzeige.innerHTML += 6;
});

number7.addEventListener('click', (event) => {
    anzeige.innerHTML += 7;
});

number8.addEventListener('click', (event) => {
    anzeige.innerHTML += 8;
});

number9.addEventListener('click', (event) => {
    anzeige.innerHTML += 9;
});

number0.addEventListener('click', (event) => {
    anzeige.innerHTML += 0;
});

minus.addEventListener('click', (event) => {
    anzeige.innerHTML += "-";
});

// Anzeige Reset

reset.addEventListener('click', (event) => {
    anzeige.innerHTML = "";
})


// test console
console.log(random());