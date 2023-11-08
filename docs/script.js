const MINIMUM = 5;
const MINIMALNI_VEK = 18; // Přidej minimální věk zde

let jmenoFetaka = window.prompt('Wassup feťáku, jaké je tvoje jméno?');
console.log(`Tvé jméno je ${jmenoFetaka}.`);
window.alert(`Zdravím tě ${jmenoFetaka}.`);

let vekFetaka = parseInt(window.prompt('Kolik ti je let?')); // Změnil jsem načítání věku a převedení na číslo
console.log(`Tvého věku je ${vekFetaka}.`);

let mnozstviFetu = window.prompt('Kolik toho u sebe máš?');
console.log(`Tvé množství fetu je ${mnozstviFetu}.`);

if (vekFetaka < MINIMALNI_VEK) {
    window.alert('Omlouváme se, ale jsi příliš mladý na tuto konverzaci.');
} else if (mnozstviFetu == MINIMUM) {
    window.alert('Vítej mezi námi!');
} else if (mnozstviFetu > MINIMUM) {
    window.alert('Proč jsi nepřišel dřív?!');
} else {
    window.alert('To je málo, budeš se muset víc snažit!');
}
