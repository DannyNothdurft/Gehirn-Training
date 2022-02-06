const tag = new Date().getDay();
let tagSpeicher;

function setzeTag() {
    if ( lp === 0 ) {
        tagSpeicher = tag;
        localStorage.setItem('TagSpeicher', tagSpeicher);
    }
}

let tagVergleich = setInterval(() => {
    if( tag != tagSpeicher && tagSpeicher != undefined ) {
        tagSpeicher = undefined;
        lp = 10;
        localStorage.setItem('Lebenspunkte', lp);
        localStorage.setItem('TagSpeicher', tagSpeicher);
    }
}, 1000);