let numeros = [10, 20, 30, 40, 50]
var x= 0
while(x < 5){
    console.log(numeros[x])
   var x = x+1
}
//interando sobre os elementos das arrays
let frutas = ["Maçã", "Banana", "Laranja"]
console.log(frutas)
frutas.forEach((fruta, index) =>{
    console.log(`${index}: ${fruta}`);
});

//Adicionando elementos
frutas.push("Uvas")
frutas.unshift("Melão")
console.log(frutas)

//removendo elementos
frutas.pop();
frutas.shift();
console.log(frutas)
frutas.splice(2,1);
console.log(frutas)




let mapa = new Map()
mapa.set("nome", "Joana")
mapa.set("idade", 20)

//Acessando valores

console.log(mapa.get("nome"))
console.log(mapa.get("idade"))