const MINIMUM = 15;
const jmenoFETAKA = window.prompt('Jak si říkáš?', 'Anonym');
window.alert(`Tomu říkám drsné jméno, ${jmenoFETAKA}!`);

const PREZDIVKA = window.confirm('Máš nějakou přezdívku?');

let prezdivka; // Declare a variable for the nickname
if (PREZDIVKA) {
    prezdivka = window.prompt('Jakou máš přezdívku?');
    const MNOZSTVI = parseInt(window.prompt(`Kolik toho u sebe máš, ${prezdivka}?`), 10);
    if (MNOZSTVI > MINIMUM) {
        window.alert(`Vítej u nás`)
       const LAJNA = window.confirm(`Chceš si dát vstupní lajnu?, ${jmenoFETAKA}` )
if (LAJNA === true) {
    }
    else window.alert(`Nemáš dostatek`)
}
}

const dnes = new Date();
const rok = dnes.getFullYear();
const mesic = dnes.getMonth();
const den = dnes.getDate();
const narozeni = window.prompt(`Dnes je ${den}. ${mesic + 1}. ${rok}. Zadej kdy jsi se k nám přidal:`, 'YYYY-MM-DD');
const datumNarozeni = new Date(`${narozeni}T00:00`);

if (!isNaN(datumNarozeni)) {
  const stastneCislo = Math.floor(Math.random() * 10) + 1;
  window.alert(`Jsi už u nás ${Math.floor((Date.parse(dnes) - Date.parse(datumNarozeni))/(1000*60*60*24))} dní. Tady máš ${stastneCislo} gramů.`);
} else {
  window.alert('Neplatný formát data');
}

const JMENO = jmenoFETAKA;
const HESLO = '5';
let prihlaseny = false;
let jeRobot = false;
let pocetPokusu = 0;

do {
  if (pocetPokusu >= 3) {
    jeRobot = window.confirm('Jsi robot?');
  }
  const uzivatelskeHeslo = window.prompt(`Zadejte heslo pro vstup k nám ${JMENO}`);
  if (uzivatelskeHeslo === HESLO && !jeRobot) {
    prihlaseny = true;
  }
  else {
    pocetPokusu ++;
  }
} while (!prihlaseny && !jeRobot && pocetPokusu < 6);

if (prihlaseny) {
  window.alert('Vítej u nás!');
}

else {
  window.alert('Jdi pryč!');
}
