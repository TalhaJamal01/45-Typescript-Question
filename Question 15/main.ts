let Guests: string[] = ["Ali", "Talha", "Kamran", "Taha"]

let unableToAttend: string = "Ali"
console.log(`${unableToAttend} can't make it to dinner.`);


let newGuest: string = "Noman"
Guests[Guests.indexOf(unableToAttend)] = newGuest;


for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]}, you're invited to dinner. Please let me know if you can attend.`);
}