const info = {
name: "Time",
age: 16,
sity: "London"
}

let portfolio = Object.values(info)
console.log(portfolio);







let numbers = [10, 6, 3, 8, 7];

const filtres = numbers.filter(num => num % 2 === 0);
console.log(filtres);



 


const contact = [
{name: "Vlad" , tel: 30875541,  adres: "@wipoolnt"},
{name: "Maks" , tel: 34578959, adres: "@Lonnisry"},
{name: "Andrey" , tel: 3422970, adres: "@Kunsutty"}
]

const op = prompt("найти информацию по именни")

const itog = contact.hasOwnProperty(op)
if (condition) {
    
}