export let x=30;

var age=30;
export var age;

export const pi=3.14;

// export default is used to export single export value.
let r = 4;
function area(){return console.log("Area of the circle is " + pi*r*r) };
export default area;

// export function
let r1=2;
export function area1(){return console.log("Area of the circle2 is " + pi*r1*r1) };
