let guests: string[] = ["Ali", "Kamran", "Taha", "Noman"]
console.log("Great News! I have found a bigger dinning table!");

guests.push("Talha")
guests.splice(guests.length / 2, 0, "Yousuf")
guests.push("Abdullah")

for (let i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}