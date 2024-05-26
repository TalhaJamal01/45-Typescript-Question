function make_sandwich(...items: string[]): void {

    console.log("Making a sandwich with:");

    if (items.length === 0) {
        console.log(" - Just bread, I guess!");
    }
    else {
        for (let i = 0; i < items.length; i++) {
            console.log(` - ${items[i]}`);
        }
    }
    console.log("Enjoy your sandwich!");
}

make_sandwich("Cheese", "Ketchup", "Lettuce", "Jelapeno");
make_sandwich("Chocolate Spread", "Jelly");
make_sandwich();