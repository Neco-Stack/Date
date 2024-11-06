import { differenceInHours, differenceInSeconds, differenceInYears } from "date-fns";

const anfangsDatum : Date = new Date(1970,0,1);
const jetztDatum : Date = new Date();
const jahreUnterschied: number = differenceInYears(jetztDatum,anfangsDatum);
const stundenUnterschied: number = differenceInHours(jetztDatum, anfangsDatum);
const sekundenUnterschied: number = differenceInSeconds(jetztDatum, anfangsDatum)
console.log(jahreUnterschied, sekundenUnterschied, stundenUnterschied);

const myBirthday: Date = new Date(1986, 9, 1);
console.log(myBirthday);
const myAge: number = differenceInYears(jetztDatum,myBirthday)
console.log(myAge);





