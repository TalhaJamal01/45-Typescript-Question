function createCar(Manufacturer: string, Model: string, ...options: [string, any][]): any {
    let car: any = {
        Manufacturer: Manufacturer,
        Model: Model
    };
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        car[option[0]] = option[1];
    }
    return car;
}

let myCar = createCar("Mercedes", "Toyota", ["Color", "Grey"], ["Year", 2023]);
console.log(myCar);
