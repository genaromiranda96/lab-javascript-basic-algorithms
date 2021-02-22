// Iteration 1: Names and Input
let hacker1 = "Genaro"
console.log("The driver's name is",hacker1);

let hacker2 = "Ramon"
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

const lengthH1 = hacker1.length
const lengthH2 = hacker2.length

console.log(lengthH1);
console.log(lengthH2);

if (lengthH1>lengthH2) {
  console.log (`The driver has the longest name, it has ${lengthH1} characters`)
} if (lengthH2>lengthH1) {
  console.log(`It seems that the navigator has the longest name, it has ${lengthH2} characters.`)
} if (lengthH1===lengthH2) {
  console.log (`Wow, you both have equally long names, ${lengthH1} characters!`)
}


// Iteration 3: Loops

// 3.1
let letterSPACE = ""

for ( i = 0; i < lengthH1; i++) {
  letterSPACE += hacker1.charAt(i)+ " "
}
console.log (letterSPACE.toUpperCase())


// 3.2

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
 
console.log(reverseString(hacker2))


//3.3 

let comparation = hacker1.localeCompare(hacker2) //verdadero y da un valor negativo porque la "G" de Genaro viene antes

if (comparation===-1) {
  console.log(`The drivers names goes first`)
} if (comparation===+1) {
  console.log(`Yo, the navigator goes first definitely.`)
} if (comparation===0) {
  console.log(`What? You bothe have the same name?`)
}
