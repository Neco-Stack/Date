const output = document.getElementById('outputDate') as HTMLElement;
const aktuellesDatum: Date = new Date();
console.log(aktuellesDatum);
const tag: number = aktuellesDatum.getDate();
const monat: number = aktuellesDatum.getMonth() +1; 
const jahr : number = aktuellesDatum.getFullYear(); 

const version1: string = tag + '-' + monat + '-' + jahr;
const version2: string = tag + '/' + monat + '/' + jahr;
console.log(version1);
console.log(version2);

const aktuelleUhrzeitLokal: string = aktuellesDatum.toLocaleTimeString();
console.log(aktuelleUhrzeitLokal);
const aktuelleUhrzeitUTC: string = aktuellesDatum.toUTCString().split(' ')[4];
console.log(aktuelleUhrzeitUTC);

output.innerHTML = `
<p>Aktuelle Uhrzeit Lokal: ${aktuelleUhrzeitLokal}
<p>Aktuelle Uhrzeit UTC: ${aktuelleUhrzeitUTC}
<p>Version1: ${version1}
<p>Version2: ${version2}`




