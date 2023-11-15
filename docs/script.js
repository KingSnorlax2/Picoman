const MINIMUM = 15;
const jmenoFETAKA = window.prompt('Jak si říkáš?', 'Anonym');
window.alert(`Tomu říkám drsné jméno, ${jmenoFETAKA}!`);

const hasNickname = window.confirm('Máš nějakou přezdívku?');

let prezdivka; // Declare a variable for the nickname
if (hasNickname) {
    prezdivka = window.prompt('Jakou máš přezdívku?');
    const MNOZSTVI = parseInt(window.prompt(`Kolik toho u sebe máš, ${prezdivka}?`), 10);

    if (MNOZSTVI < MINIMUM) {
        window.alert(`Nemáš dostatek`)
    }
    else window.alert(`Vítej u nás`)
}
