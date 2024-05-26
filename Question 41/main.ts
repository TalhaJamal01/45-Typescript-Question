function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let magicianNames: string[] = ["Doug Henning", "Dynamo", "Ricky Jay", "David Blaine"];

show_magicians(magicianNames);