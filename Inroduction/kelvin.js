// forecast for today in kelvin
const kelvin = 0;
// forecast for today in celcius
const celcius = kelvin - 273;
// forecast for today in farenheit
let farenheit = celcius * (9/5) + 32;
// removes deciaml point
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Fahrenheit.
`);

let newton = celcius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.
`);

