const output = document.getElementById('outputDate') as HTMLElement;
const date1: Date = new Date("November 6, 2019 09:00:00");
const date2: Date = new Date(0);
const date3: Date = new Date(31556908800);
const date4: Date = new Date(86400000); 



output.innerHTML = `
<p>Datum 1: ${date1}
<p>Datum 2: ${date2}
<p>Datum 3: ${date3}
<p>Datum 4: ${date4}`

console.log(date1);
console.log(date2);
console.log("Local string deutsch", date1.toLocaleString());
console.log("local string GB", date1.toLocaleString("en-GB"));
console.log("project start day of week", date1.getDay());
console.log("bootcamp start", date3.getMonth());
console.log("project start the month", date4.getFullYear());
console.log(date1.getTime());










