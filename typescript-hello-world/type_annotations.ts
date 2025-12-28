const str: string = "Heloo";
const num: number = 6;
const arr: (number | string)[] = 
    ["YSO", "TypeScript", 500, 20];

function greet1(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet1("Alice"));
console.log(greet1(""));
console.log(typeof str);
console.log(typeof num);
console.log(arr);
console.log(str);
console.log(num);
