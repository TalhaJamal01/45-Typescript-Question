function describe_city(cityName: string, countryName: string = "Australia") {
    console.log(`${cityName} is in ${countryName}`);
}

describe_city("Karachi", "Pakistan")
describe_city("Tokyo", "Japan")
describe_city("Sydney")